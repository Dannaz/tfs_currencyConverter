import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../shared/services/currency.service";
import {Observable} from "rxjs";
import {isUndefined} from "util";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  DEFAULT_VALUE: number = 100;
  DEFAULT_WALLET: string = 'RUB';
  DEFAULT_UPDATE_INTERVAL: number = 60000;

  currency;
  converters: object[];

  popularRates;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    const rates$ = this.currencyService.loadActualRates(this.DEFAULT_UPDATE_INTERVAL);
    const popular$ = this.currencyService.loadPopularWallets();
    const locale$ = this.currencyService.loadWalletsLocalization();

    rates$.subscribe((data) => {
      if (isUndefined(this.converters)) {
        this.converters = this.currencyService.updateConverters(this.DEFAULT_VALUE, this.DEFAULT_WALLET);
      }
    },
      (err: Error | any) => {
        console.log('something gone wrong on rates loading:', err);
      });

    locale$.delay(1000).subscribe((walletsLocale) => {
      this.currency = walletsLocale;
    },
      (err: Error | any) => {
        console.log('something gone wrong on wallets locale loading:', err);
      });

    popular$.delay(1000).subscribe(() => {
      this.updatePopularRates(this.DEFAULT_WALLET);
    },
      (err: Error | any) => {
        console.log('something gone wrong on popular rates load:', err);
      });
  }

  onCurrencyInputChange(converter) {
    this.converters = this.currencyService.updateConverters(converter.walletValue, converter.walletName);
  }

  addConverter() {
    console.log('--- adding');
    this.currencyService.addConverter();
    this.currencyService.updateConverters(100, 'RUB');
  }

  updatePopularRates(walletName) {

    const result = this.currencyService.getCurrencyRates(walletName);

    if (result instanceof Observable) {
      result.subscribe((data) => {
        this.popularRates = data;
      });
    } else {
      this.popularRates = result;
    }
  }

  onConverterDelete(converter) {
    this.currencyService.deleteConverter(converter);
    this.converters = this.currencyService.updateConverters(converter.walletValue, converter.walletName);
  }
}
