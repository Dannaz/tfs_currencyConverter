import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';

const BASE_URL = 'http://api.fixer.io';
const POPULAR_WALLETS_URL = 'https://currencywidget.firebaseio.com/popular.json';
const BASE_WALLET = 'RUB';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/combineLatest'
import {IConverter} from "../model/iconverter";
import {Observable} from "rxjs";
import {observable} from "rxjs/symbol/observable";

interface Rates {
  [key: string]: number
}

@Injectable()
export class CurrencyService {

  constructor(private http: Http) { }

  private rates: Rates;
  private currency: object[];

  private converters: IConverter[] = [{
    walletName: 'RUB',
    walletValue: 0
  },{
    walletName: 'USD',
    walletValue: 0
  }];

  getConverters() {
    //let storedConverters = JSON.parse(localStorage.getItem('converters'));
    //let converters: IConverter[] = [];
    //if (!storedConverters) {
    //  converters.push(Object.assign({},{walletName: 'USD', walletValue: 0}));
    //  converters.push(Object.assign({},{walletName: 'RUB', walletValue: 0}));
    //  console.log('---converters', converters);
    //} else {
    //  for(let converterWallet in storedConverters){
    //    converters.push(Object.assign({},{walletName: storedConverters[converterWallet], walletValue: 0}));
    //    console.log('---converters', converters);
    //  }
    //}
    return this.converters;
  }

  getCurrentCurrency(){
    return this.http.get(`${BASE_URL}/latest?base=${BASE_WALLET}`)
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

  getCurrencyRates(){
    const popularWallets$ = this.http.get(POPULAR_WALLETS_URL)
      .map((res: Response) => {return res.json()})
      .map((data: object) => {
        const result = Object.keys(data)
          .map(key => Object.assign({}, {key}, data[key]));
        return result;
      });

    const currencyRatesRaquest$ = popularWallets$
      .map(wallets => {
        return wallets.map(item => {
          return `${BASE_URL}/latest?base=${item.walletName}&symbols=${BASE_WALLET}`;
        })
      })
      .do(urls => console.log('---urls', urls))
      .map(urls => {
        const requests = urls
          .map(url => {
            const res = this.http.get(url)
              .map((res: Response) => {return res.json()})
              .map(data => {
                return Object.assign({},{[data.base]: data.rates[BASE_WALLET]})
              });
            return res;
          });
        return Observable.combineLatest(requests);
      })
      .do(data => console.log('---req', data));

    currencyRatesRaquest$.subscribe(data => {
      data.subscribe(data => console.log('---inner data', data));
      console.log('---outer data', data);
    });

  }

  updateConverters(value: number, wallet: string){
    if (!this.converters) this.converters = this.getConverters();
    this.converters
      .map(converter => {
        converter.walletValue = this.convertValue(value, wallet, converter.walletName);
      });
    this.saveConverters();
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

  saveConverters(){
    let convertersWallets: string[] = [];
    this.converters.forEach(conv => {convertersWallets.push(conv.walletName)});
    localStorage.setItem('converters', JSON.stringify(convertersWallets));
  }

  private  convertValue(value:number, fromWallet: string, toWallet: string) {
    //let converted: number = (value / this.rates[fromWallet]) * this.rates[toWallet];
    //converted.toFixed(2);
    return parseFloat(((value / this.rates[fromWallet]) * this.rates[toWallet]).toFixed(2));
  }

  private convertToRatesObject(data): Rates {
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
