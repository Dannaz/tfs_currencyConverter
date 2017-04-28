import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../shared/services/currency.service";
import {Observable} from "rxjs";
import {isUndefined} from "util";
import {IConverter} from "../shared/model/iconverter";
import {IWallet} from "../shared/model/iwallet";
import {IRates} from "../shared/model/irates";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  DEFAULT_VALUE: number = 100;
  DEFAULT_WALLET: string = 'RUB';
  DEFAULT_UPDATE_INTERVAL: number = 60000;

  currency: IWallet[];
  converters: IConverter[];
  lastUpdatedConverter = {
    id: 0,
    walletValue: this.DEFAULT_VALUE,
    walletName: this.DEFAULT_WALLET
  };
  popularRates: IRates[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    const rates$ = this.currencyService.loadActualRates(this.DEFAULT_UPDATE_INTERVAL);
    const popular$ = this.currencyService.loadPopularWallets();
    const locale$ = this.currencyService.loadWalletsLocalization();

    rates$.subscribe(() => {
      if (isUndefined(this.converters)) {
        this.converters = this.currencyService.updateConverters(this.lastUpdatedConverter);
      }
    },
      (err: Error | any) => {
        console.log('something gone wrong on rates loading:', err);
      });

    locale$.subscribe((walletsLocale: Array<IWallet>) => {
      this.currency = walletsLocale;
    },
      (err: Error | any) => {
        console.log('something gone wrong on wallets locale loading:', err);
      });

    popular$.subscribe(() => {
      this.updatePopularRates(this.DEFAULT_WALLET);
    },
      (err: Error | any) => {
        console.log('something gone wrong on popular rates load:', err);
      });
  }

  onCurrencyInputChange(converter) {
    if (!isNaN(converter.walletValue)) {
      this.lastUpdatedConverter = converter;
      this.converters = this.currencyService.updateConverters(converter);
    } else {
      this.currencyService.updateConverters(this.lastUpdatedConverter);
    }

  }

  addConverter() {
    this.currencyService.addConverter();
    this.currencyService.updateConverters(this.lastUpdatedConverter);
  }

  updatePopularRates(walletName) {

    const result = this.currencyService.getCurrencyRates(walletName);

    if (result instanceof Observable) {
      result.subscribe((data: Array<IRates>) => {
        this.popularRates = data;
      });
    } else {
      this.popularRates = result;
    }
  }

  onConverterDelete(converter) {
    this.currencyService.deleteConverter(converter);
    this.converters = this.currencyService.updateConverters(converter);
  }
}
