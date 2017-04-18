import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';

const BASE_URL = 'http://api.fixer.io';
const BASE_VALET = 'RUB';

import 'rxjs/add/operator/map';
import {IConverter} from "../model/iconverter";

@Injectable()
export class CurrencyService {


  constructor(private http: Http) { }

  private rates: object;
  private currency: object[];

  private converters: IConverter[] = [{
    walletName: 'RUB',
    walletValue: 0
  },{
    walletName: 'USD',
    walletValue: 0
  }];

  getCurrentCurrency(){
    return this.http.get(`${BASE_URL}/latest?base=${BASE_VALET}`)
      .map((res: Response) => {return res.json()})
      //.map((data) => {return this.convertCurrencyToArray(data)});
      .map(data => {
        this.rates = this.convertToRatesObject(data);
        return this.rates;
      })
      .map(rates => {
        this.currency = this.convertToCurrencyArray(rates);
        return this.currency;
      });
  }
  updateConverters(value: number, wallet: string){
    this.converters
      .map(converter => {
        converter.walletValue = this.convertValue(value, wallet, converter.walletName);
      });
    return this.converters;
  }

  addConverter(){
    let converter: IConverter = {
      walletName: "RUB",
      walletValue: 0
    };
    this.converters.push(converter);
    console.log('--- converters', this.converters);
  }

  private  convertValue(value:number, fromWallet: string, toWallet: string) {
    //let converted: number = (value / this.rates[fromWallet]) * this.rates[toWallet];
    //converted.toFixed(2);
    return parseFloat(((value / this.rates[fromWallet]) * this.rates[toWallet]).toFixed(2));
  }

  private convertToRatesObject(data): object {
    let ratesObject = {};
    Object.assign(ratesObject, {[data.base]: 1});
    for(let key in data.rates) {
      Object.assign(ratesObject, {[key]: data.rates[key]});
    }
    return ratesObject;
  }

  private convertToCurrencyArray(rates): object[]{
    return Object.keys(rates).map(key => {return {walletName: key}});
  }
}
