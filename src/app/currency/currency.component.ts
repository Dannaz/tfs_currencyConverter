import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../shared/services/currency.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  DEFAULT_VALUE: number = 100;
  DEFAULT_WALLET: string = 'RUB';

  currency: object[];
  converters: object[];

  test;


  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.updateCurrency();

  }

  private updateCurrency() {
    this.currencyService.getCurrentCurrency()
      .subscribe((data: object[]) => {
      this.currency = data;
      this.converters = this.currencyService.updateConverters(this.DEFAULT_VALUE, this.DEFAULT_WALLET);
    });
  }

  onCurrencyInputChange(converter){
    this.converters = this.currencyService.updateConverters(converter.walletValue, converter.walletName);
  }

  addConverter(){
    console.log('--- adding');
    this.currencyService.addConverter();
    this.currencyService.updateConverters(100, "RUB");
  }
}
