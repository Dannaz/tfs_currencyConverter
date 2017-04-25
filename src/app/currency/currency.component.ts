import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../shared/services/currency.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  DEFAULT_VALUE: number = 100;
  DEFAULT_WALLET: string = 'RUB';

  currency;
  converters: object[];

  popularRates;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    //this.updateCurrency();
    this.currencyService.initialize()
      .subscribe((data) => {
        console.log('oninit', data);
        this.currency = data;
        //this.popularRates = data[1];
        //console.log('---popular rates', this.popularRates);
        this.converters = this.currencyService.updateConverters(this.DEFAULT_VALUE, this.DEFAULT_WALLET);
      });
    //this.updatePopularRates(this.DEFAULT_WALLET);
    //this.currencyService.getCurrencyRates(this.DEFAULT_WALLET);
    // this.currencyService.getCurrencyRatesPromise(this.DEFAULT_WALLET)
    //   .then(data => {
    //     console.log(data);
    //     this.popularRates = data})
    //   .catch(err => {console.log('Muahaha: ', err)});
  //this.updatePopularRates(this.DEFAULT_WALLET)
  }

  private updateCurrency() {
    // this.currencyService.getCurrentCurrency()
    //   .subscribe((data: object[]) => {
    //   //this.currency = data;
    //   this.converters = this.currencyService.updateConverters(this.DEFAULT_VALUE, this.DEFAULT_WALLET);
    // });
  }

  onCurrencyInputChange(converter){
    this.converters = this.currencyService.updateConverters(converter.walletValue, converter.walletName);
  }

  addConverter(){
    console.log('--- adding');
    this.currencyService.addConverter();
    this.currencyService.updateConverters(100, "RUB");
  }

  updatePopularRates(walletName){

    let result = this.currencyService.getCurrencyRates(walletName);

    if (result instanceof Observable) {
      result.subscribe(data => this.popularRates = data);
    } else {
      this.popularRates = result;
    }

    console.log('type', result instanceof Observable);
    //
    // console.log('---pr', this.popularRates);


    //.subscribe((data) => {console.log(data)});

    // this.currencyService.getCurrencyRatesPromise(walletName)
    //   .then(data => {
    //     console.log('---data', data);
    //     this.popularRates = data})
    //   .catch(err => {console.log('Muahaha: ', err)});
  }
}
