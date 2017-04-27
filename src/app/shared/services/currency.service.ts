import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const BASE_URL = 'https://api.fixer.io';
const WALLETS_URL = 'https://currencywidget.firebaseio.com/';
const baseWallet = 'RUB';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import {Observable} from 'rxjs';
import {isUndefined} from 'util';
import {IRates} from '../model/irates';
import {IPopularWalletDBO} from '../model/ipopular-wallet-dbo';
import {IPopularWallets} from '../model/ipopular-wallets';
import {ICachedRates} from '../model/icached-rates';
import {IWallet} from '../model/iwallet';
import {ICurrencyRates} from '../model/icurrency-rates';

interface IConverter {
  id: number;
  walletName: string;
  walletValue: number;
}

@Injectable()
export class CurrencyService {

  private rates: ICurrencyRates;
  private currency: object[];
  private popularWallets: IPopularWallets[];
  private cachedRates: ICachedRates[] = [];

  private converters: IConverter[] = [{
    id: 1,
    walletName: 'RUB',
    walletValue: 0
  }, {
    id: 2,
    walletName: 'USD',
    walletValue: 0
  }];

  constructor(private http: Http) { }

  getConverters() {
    return this.converters;
  }

  loadActualRates(updateInterval: number): Observable<ICurrencyRates> {
    const actualRates$ = this.http.get(`${BASE_URL}/latest?base=${baseWallet}`)
      .map((res: Response) => {
        return res.json();
      })
      .map((data: IRates) => {
        return this.convertToRatesObject(data);
      })
      .do((rates: ICurrencyRates) => {
        this.rates = rates;
      })
      .catch((err: Error) => {
        console.warn('--- failed loading rates', err);
        return Observable.empty();
      });

    return Observable.interval(updateInterval).startWith(0).switchMap(() => {
      return actualRates$;
    });
  }

  loadPopularWallets(): Observable<IPopularWallets[]> {
    return this.http.get(`${WALLETS_URL}popular.json`)
      .map((res: Response) => {
        return res.json();
      })
      .map((data: IPopularWalletDBO[]) => {
        return Object.keys(data)
          .map((key) => {
            return Object.assign({}, {key}, data[key]);
          });
      })
      .do((popularWallets: IPopularWallets[]) => {
        this.popularWallets = popularWallets;
      })
      .catch((err: Error) => {
        console.warn('--- failed loading popular wallets', err);
        return Observable.empty();
      });
  }

  loadWalletsLocalization(): Observable<IWallet[]> {
    return this.http.get(`${WALLETS_URL}currency.json`)
      .map((res: Response) => {
        return res.json();
      })
      .map((data: object) => {
       return Object.keys(data)
         .map((key: string) => {
           return Object.assign({}, {walletName: key}, {walletLocaleName: data[key]});
         });
      })
      .map((wallets: IWallet[]) => {
        return wallets.sort(this.compareWalletNames);
      })
      .catch((err: Error) => {
        console.warn('--- failed loading localization', err);
        return Observable.empty();
      });
  }


  private compareWalletNames(name1: IWallet, name2: IWallet) {
    if (name1.walletLocaleName < name2.walletLocaleName) {
      return -1;
    }
    if (name1.walletLocaleName > name2.walletLocaleName) {
      return 1;
    }
    return 0;
  }

  getCurrencyRates(myWallet: string): Observable<IRates[]> | any {
    if (this.cachedRates) {
      const currency = this.cachedRates.find(item => {
        return item.base === myWallet;
      });
      if (!isUndefined(currency)) {
        console.log('used cached values');
        return currency.rates;
      }
    }

    const CurrencyRatesRequest$ = Observable.of(this.popularWallets)
      .switchMap((wallets: IPopularWallets[]) => {
        const urls = wallets
          .filter((wallet: IPopularWallets) => {
           return wallet.walletName !== myWallet;
          })
          .map(wallet => {
            return `${BASE_URL}/latest?base=${wallet.walletName}&symbols=${myWallet}`;
          });
        const requests = urls.map(url => {
          return this.http.get(url)
            .map(res => {
              return res.json();
            });
        });
        return Observable.combineLatest(requests);
      })
      .do((rates) => {
        const muteRates = Object.keys(rates)
          .map(key => {
            return Object.assign(rates[key], {rates: rates[key].rates[myWallet]});
          });

        this.cachedRates.push(Object.assign({}, {base: myWallet}, {rates: rates}));
      });

    return CurrencyRatesRequest$;
  }

  updateConverters(value: number, wallet: string) {
    if (!this.converters) {
      this.converters = this.getConverters();
    }
    this.converters
      .map(converter => {
        converter.walletValue = this.convertValue(value, wallet, converter.walletName);
      });
    this.saveConverters();
    return this.converters;
  }

  addConverter() {
    const converter: IConverter = {
      id: Math.random() * 1000,
      walletName: undefined,
      walletValue: 0
    };
    this.converters.push(converter);
  }

  saveConverters() {
    const convertersWallets: string[] = [];
    this.converters.forEach(converter => {
      convertersWallets.push(converter.walletName);
    });
  }

  private  convertValue(value: number, fromWallet: string, toWallet: string) {
    return parseFloat(((value / this.rates[fromWallet]) * this.rates[toWallet]).toFixed(2));
  }

  private convertToRatesObject(data): ICurrencyRates {
    const ratesObject = {};
    Object.assign(ratesObject, {[data.base]: 1});
    for (const key in data.rates) {
      Object.assign(ratesObject, {[key]: data.rates[key]});
    }
    return ratesObject;
  }

  private convertToCurrencyArray(rates): object[] {
    return Object.keys(rates).map(key => {
      return {walletName: key};
    });
  }

  getCurrentCurrency() {
    return this.http.get(`${BASE_URL}/latest?base=${baseWallet}`)
      .map((res: Response) => {
        return res.json();
      })
      //.map((data) => {return this.convertCurrencyToArray(data)});
      .map(data => {
        this.rates = this.convertToRatesObject(data);
        return this.rates;
      })
      .map(rates => {
        this.currency = this.convertToCurrencyArray(rates);
        console.log(this.currency);
        return this.currency;
      });
  }

  getCurrencyRatesPromise(myWallet: string) {

    return fetch(`${WALLETS_URL}popular.json`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return Object.keys(data)
          .map(key => Object.assign({}, {key}, data[key]));
      })
      .then((wallets: IPopularWallets[]) => {
        console.log(wallets);
        return wallets
          .filter(wallet => {
            return wallet.walletName !== myWallet;
          })
          .map(wallet => {
            return `${BASE_URL}/latest?base=${wallet.walletName}&symbols=${myWallet}`;
          });
      })
      .then((urls: string[]) => {
        return urls.map(url => {
          return fetch(url)
            .then(res => {return res.json()});
        });
      })
      .then((promises: Promise<IRates>[]) => {
        return Promise.all(promises);
      })
      .then((data: IRates[]) => {
        return Object.keys(data)
          .map(key => {
            return Object.assign(data[key], {rates: data[key].rates[myWallet]});
          });
      })
      .catch(err => {
        console.log('--- oops', err.message);
        throw err;
      });
  }

  deleteConverter(converterToDelete: IConverter) {
    this.converters = this.converters
      .filter((converter: IConverter) => {
        return converter.id !== converterToDelete.id;
      });
  }

  randomInteger(min: number, max: number): number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }
}
