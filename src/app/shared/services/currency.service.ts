import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const BASE_URL = 'http://api.fixer.io';
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
//import {IConverter} from '../model/iconverter';

interface Rates {
  [key: string]: number
}

interface IConverter {
  id: number,
  walletName: string,
  walletValue: number
}

interface IRates {
  base: string,
  date: string,
  rates: {
    [key: string]: number
  }
}

interface IPopularWalletsDBO {
  [key: string]: {
    walletName: string
  }
}

interface IPopularWallets {
  key: string,
  walletName: string
}

interface ICachedRates {
  base: string
  rates: Array<IRates>;
}

interface IRate {
  [walletName: string]: number
}

interface IWallet {
  walletName: string,
  walletLocaleName: string
}


@Injectable()
export class CurrencyService {

  private rates: Rates;
  private currency: object[];
  private popularWallets: IPopularWallets[];
  private walletsLocale;

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



  initialize() {
    // this.loadActualRates().subscribe((rates: Rates) => {
    //   this.rates = rates;
    // });
    // this.loadPopularWallets().subscribe((popularWallets: IPopularWallets[]) => {
    //  this.popularWallets = popularWallets;
    // });

    //return this.loadWalletsLocalization();

    return Observable.combineLatest(this.loadActualRates(600), this.loadPopularWallets(), this.loadWalletsLocalization())
      .map(([actualRates, popularWallets, localization]) => {
        return localization;
      });
    //return initialRequests$;//.subscribe(data => console.log('combined:', data));
  }

  loadActualRates(updateInterval: number): Observable<Rates> {
    const actualRates$ = this.http.get(`${BASE_URL}/latest?base=${baseWallet}`)
      .map((res: Response) => {
        return res.json();
      })
      .map((data: IRates) => {
        return this.convertToRatesObject(data);
      })
      .do((rates: Rates) => {
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
      .map((res: Response) => {return res.json()})
      .map((data: IPopularWalletsDBO[]) => {
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
      .map((res: Response) => {return res.json()})
      .map((data: object) => {
       return Object.keys(data)
         .map((key: string) => {
           return Object.assign({},{walletName: key}, {walletLocaleName: data[key]});
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

  getCurrencyRates(baseWallet: string): Observable<IRates[]> | any {
    if (this.cachedRates) {
      const currency = this.cachedRates.find(item => {
        return item.base === baseWallet;
      });
      if (!isUndefined(currency)) {
        console.log('used cached values');
        return currency.rates;
      }
    }

    // const popularWallets$ = this.http.get(`${WALLETS_URL}popular.json`)
    //   .map((res: Response) => {return res.json()})
    //   .map((data: object) => {
    //     const result = Object.keys(data)
    //       .map(key => Object.assign({}, {key}, data[key]))
    //       .filter(wallet => {return wallet.walletName !== baseWallet});
    //     return result;
    //   });

    // const currencyRatesRequest$ = popularWallets$
    //   .map(wallets => {
    //     return wallets.map(item => {
    //       return `${BASE_URL}/latest?base=${item.walletName}&symbols=${baseWallet}`;
    //     })
    //   })
    //   .do(urls => console.log('---urls', urls))
    //   .map(urls => {
    //     const requests = urls
    //       .map(url => {
    //         const res = this.http.get(url)
    //           .map((res: Response) => {return res.json()})
    //           .map(data => {
    //             return Object.assign({},{[data.base]: data.rates[baseWallet]})
    //           });
    //         return res;
    //       });
    //     return Observable.combineLatest(requests);
    //   })
    //   .do(data => console.log('---req', data));



    const CurrencyRatesRequest$ = Observable.of(this.popularWallets)
      .switchMap((wallets: IPopularWallets[]) => {
        console.log('---pw', this.popularWallets);
        const urls = wallets
          .filter((wallet: IPopularWallets) => {
           return wallet.walletName !== baseWallet;
          })
          .map(wallet => {
            return `${BASE_URL}/latest?base=${wallet.walletName}&symbols=${baseWallet}`;
          });
        const requests = urls.map(url => {
          return this.http.get(url)
            .map(res => {
              const data = res.json();
              //const resp = Object.assign({}, {[data.base]: data.rates[baseWallet]});
              //console.log('---body',resp);
              return data;
            });
        });
        return Observable.combineLatest(requests);
      })
      .do((rates) => {
        console.log('---r', rates);

        const muteRates = Object.keys(rates)
          .map(key => {
            return Object.assign(rates[key], {rates: rates[key].rates[baseWallet]});
          });
        console.log('after mute', muteRates);

        this.cachedRates.push(Object.assign({}, {base: baseWallet}, {rates: rates}));
        //console.log('cr:', this.cachedRates);
      });
      //.subscribe(rates => {this.currency = rates});

    // CurrencyRatesRequest$
    //   .subscribe((data)=>{
    //     console.log('SWITCHMAP');
    //     console.log(data);
    //   });

    return CurrencyRatesRequest$;

    // newCurrencyRatesRequest$.subscribe(data => {
    //   data.subscribe(innerData => {console.log('---rxjs inner',innerData)})
    //   console.log('---rxjs', data)
    // });

    // currencyRatesRequest$.subscribe(data => {
    //   data.subscribe(data => console.log('---inner data', data));
    //   console.log('---outer data', data);
    // });
  }

  // getPopularRates() {
  //   fetch(`${WALLETS_URL}popular.json`)
  //     .then(res => {return res.json()})
  //     .then(data => {
  //       return Object.keys(data)
  //         .map(key => Object.assign({}, {key}, data[key]));
  //     })
  //     .then(wallets => this.popularRates = wallets);
  // }

  updateConverters(value: number, wallet: string){
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
      walletName: 'RUB',
      walletValue: 0
    };
    this.converters.push(converter);
    console.log('--- converters', this.converters);
  }

  saveConverters() {
    const convertersWallets: string[] = [];
    this.converters.forEach(converter => {convertersWallets.push(converter.walletName)});
    // localStorage.setItem('converters', JSON.stringify(convertersWallets));
  }

  private  convertValue(value: number, fromWallet: string, toWallet: string) {
    //let converted: number = (value / this.rates[fromWallet]) * this.rates[toWallet];
    //converted.toFixed(2);
    return parseFloat(((value / this.rates[fromWallet]) * this.rates[toWallet]).toFixed(2));
  }

  private convertToRatesObject(data): Rates {
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

  getCurrentCurrency(){
    return this.http.get(`${BASE_URL}/latest?base=${baseWallet}`)
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

  getCurrencyRatesPromise(baseWallet: string) {

    return fetch(`${WALLETS_URL}popular.json`)
      .then(res => {return res.json()})
      .then(data => {
        return Object.keys(data)
          .map(key => Object.assign({}, {key}, data[key]));
      })
      .then((wallets: IPopularWallets[]) => {
        console.log(wallets);
        return wallets
          .filter(wallet => {return wallet.walletName !== baseWallet})
          .map(wallet => {
            return `${BASE_URL}/latest?base=${wallet.walletName}&symbols=${baseWallet}`;
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
            return Object.assign(data[key], {rates: data[key].rates[baseWallet]});
          });
      })
      .catch(err => {
        console.log('--- oops',err.message);
        throw err;
      });
    //.then(data => console.log('---promise', data));
  }

  deleteConverter(converterToDelete: IConverter) {
    this.converters = this.converters
      .filter((converter: IConverter) => {
        return converter.id !== converterToDelete.id;
      });
  }
}
