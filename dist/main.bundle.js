webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 133;


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(145);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(205),
        styles: [__webpack_require__(199)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_currency_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_currency_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_input_currency_input_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__currency_dropdown_currency_dropdown_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__currency_info_currency_info_component__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__currency_currency_component__["a" /* CurrencyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__currency_input_currency_input_component__["a" /* CurrencyInputComponent */],
            __WEBPACK_IMPORTED_MODULE_8__currency_dropdown_currency_dropdown_component__["a" /* CurrencyDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_9__currency_info_currency_info_component__["a" /* CurrencyInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_currency_service__["a" /* CurrencyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyDropdownComponent = (function () {
    function CurrencyDropdownComponent() {
        this.currencyChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    CurrencyDropdownComponent.prototype.ngOnInit = function () {
    };
    CurrencyDropdownComponent.prototype.onItemClick = function (target) {
        console.log(target);
        if (target.classList.contains('dropdown-content__item')) {
            if (target.dataset.wallet !== this.currentCurrency.walletName) {
                Object.assign(this.currentCurrency, { walletName: target.dataset.wallet });
                this.currencyChange.emit(this.currentCurrency.walletName);
            }
        }
    };
    return CurrencyDropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyDropdownComponent.prototype, "currentCurrency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Array)
], CurrencyDropdownComponent.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CurrencyDropdownComponent.prototype, "currencyChange", void 0);
CurrencyDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency-dropdown',
        template: __webpack_require__(206),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [])
], CurrencyDropdownComponent);

//# sourceMappingURL=currency-dropdown.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyInfoComponent = (function () {
    function CurrencyInfoComponent() {
        this.walletChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.currentCurrency = { walletName: 'RUB' };
    }
    CurrencyInfoComponent.prototype.ngOnInit = function () {
    };
    CurrencyInfoComponent.prototype.onCurrencyChange = function (value) {
        this.walletChange.emit(value);
    };
    return CurrencyInfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyInfoComponent.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyInfoComponent.prototype, "popularRates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CurrencyInfoComponent.prototype, "walletChange", void 0);
CurrencyInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency-info',
        template: __webpack_require__(207),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], CurrencyInfoComponent);

//# sourceMappingURL=currency-info.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyInputComponent = (function () {
    function CurrencyInputComponent(currencyService) {
        this.currencyService = currencyService;
        this.REGEXP_PATTERN = '^[0-9]+\.?[0-9]+$';
        this.SEPARATOR = ' ';
        this.currencyInputChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.inputValueControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.regExp = new RegExp(this.REGEXP_PATTERN);
    }
    CurrencyInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputValueControl.valueChanges.subscribe(function (inputValue) {
            // console.log('--- new value', inputValue);
            // console.log('---format', this.format(parseFloat(inputValue), ' '));
            // console.log('---parsed', this.parse(parseFloat(this.format(parseFloat(inputValue), ' ')), ' '));
            _this.currentConverter.walletValue = _this.parse(inputValue, _this.SEPARATOR);
            _this.currencyInputChange.emit(_this.currentConverter);
        });
    };
    CurrencyInputComponent.prototype.format = function (number, separator) {
        if (isNaN(number)) {
            return "0";
        }
        return number.toString().split(/(?=(?:\d{3})+(?!\d))/).join(separator);
        //isNaN(number) ? "0" : number.toString().split(/(?=(?:\d{3})+(?!\d))/).join(separator);
        // let value = number.toString().split(/(?=(?:\d{3})+(?!\d))/);
        // console.log('---value',value);
        // return number.toString().split(/(?=(?:\d{3})+(?!\d))/).join(separator);
        // if (isNaN(number)) return "0";
        // let parts = number.toString().split(".");
        // //parts[0] = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
        // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        // return parts.join(".");
    };
    CurrencyInputComponent.prototype.parse = function (number, separator) {
        return number.toString().split(separator).join('');
        //return number.toString().replace(separator,'');
    };
    CurrencyInputComponent.prototype.onWalletChange = function (walletName) {
        this.currentConverter.walletName = walletName;
        this.currencyInputChange.emit(this.currentConverter);
    };
    CurrencyInputComponent.prototype.onChange = function (evt) {
    };
    return CurrencyInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CurrencyInputComponent.prototype, "currentConverter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Array)
], CurrencyInputComponent.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CurrencyInputComponent.prototype, "currencyInputChange", void 0);
CurrencyInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency-input',
        template: __webpack_require__(208),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object])
], CurrencyInputComponent);

var _a;
//# sourceMappingURL=currency-input.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyComponent = (function () {
    function CurrencyComponent(currencyService) {
        this.currencyService = currencyService;
        this.DEFAULT_VALUE = 100;
        this.DEFAULT_WALLET = 'RUB';
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.updateCurrency();
        this.currencyService.initialize()
            .subscribe(function (data) {
            console.log('oninit', data);
            _this.currency = data;
            //this.popularRates = data[1];
            //console.log('---popular rates', this.popularRates);
            _this.converters = _this.currencyService.updateConverters(_this.DEFAULT_VALUE, _this.DEFAULT_WALLET);
        });
        //this.updatePopularRates(this.DEFAULT_WALLET);
        //this.currencyService.getCurrencyRates(this.DEFAULT_WALLET);
        // this.currencyService.getCurrencyRatesPromise(this.DEFAULT_WALLET)
        //   .then(data => {
        //     console.log(data);
        //     this.popularRates = data})
        //   .catch(err => {console.log('Muahaha: ', err)});
        //this.updatePopularRates(this.DEFAULT_WALLET)
    };
    CurrencyComponent.prototype.updateCurrency = function () {
        // this.currencyService.getCurrentCurrency()
        //   .subscribe((data: object[]) => {
        //   //this.currency = data;
        //   this.converters = this.currencyService.updateConverters(this.DEFAULT_VALUE, this.DEFAULT_WALLET);
        // });
    };
    CurrencyComponent.prototype.onCurrencyInputChange = function (converter) {
        this.converters = this.currencyService.updateConverters(converter.walletValue, converter.walletName);
    };
    CurrencyComponent.prototype.addConverter = function () {
        console.log('--- adding');
        this.currencyService.addConverter();
        this.currencyService.updateConverters(100, "RUB");
    };
    CurrencyComponent.prototype.updatePopularRates = function (walletName) {
        var _this = this;
        var result = this.currencyService.getCurrencyRates(walletName);
        if (result instanceof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) {
            result.subscribe(function (data) { return _this.popularRates = data; });
        }
        else {
            this.popularRates = result;
        }
        console.log('type', result instanceof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]);
        //
        // console.log('---pr', this.popularRates);
        //.subscribe((data) => {console.log(data)});
        // this.currencyService.getCurrencyRatesPromise(walletName)
        //   .then(data => {
        //     console.log('---data', data);
        //     this.popularRates = data})
        //   .catch(err => {console.log('Muahaha: ', err)});
    };
    return CurrencyComponent;
}());
CurrencyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-currency',
        template: __webpack_require__(209),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object])
], CurrencyComponent);

var _a;
//# sourceMappingURL=currency.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".container {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".dropdown {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-btn {\n  background-color: #ffdd2d;\n  color: white;\n  width: 200px;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  border-radius: 10px;\n}\n\n.dropdown-content {\n  display: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  background-color: #f9f9f9;\n  width: 200px;\n  max-height: 200px;\n  overflow-y: scroll;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n\n  background:\n    /* Shadow covers */\n    linear-gradient(white 30%, rgba(255,255,255,0)),\n    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,\n\n      /* Shadows */\n    radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),\n    radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;\n  background-repeat: no-repeat;\n  background-color: white;\n  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;\n\n  /* Opera doesn't support this in the shorthand */\n  background-attachment: local, local, scroll, scroll;\n}\n.dropdown-content__item {\n  color: black;\n  list-style-type: none;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  border-bottom: 1px solid #dddddd;\n}\n.dropdown-content__item:hover {\n  background-color: #dddddd;\n}\n.dropdown:hover .dropdown-content{\n  display: block;\n}\n.dropdown:hover .dropdown-btn {\n  background-color: #ffcd33;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".currency-list {\n  list-style-type: none;\n  width: 200px;\n}\n.currency-list__item {\n  padding: 10px;\n  border-bottom: 2px solid #dddddd;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".currency-input {\n  padding: 10px;\n}\n.currency-input__input {\n  font-size: 20px;\n  padding: 10px;\n  border: 0px;\n  border-bottom: 1px solid #dddddd;\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".currency-btn{\n  display: block;\n  background-color: #ffdd2d;\n  color: white;\n  width: 200px;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-currency></app-currency>\n</div>\n\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" (click)=\"onItemClick($event.target)\">\n  <button class=\"dropdown-btn\">{{currentCurrency?.walletName || \"Укажите валюту\"}}</button>\n  <ul class=\"dropdown-content\">\n    <li\n    *ngFor=\"let wallet of currency\"\n    class=\"dropdown-content__item\"\n    [attr.data-wallet]=\"wallet.walletName\"\n    >{{wallet?.walletLocaleName}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<p>\n  Курсы валют по отношению к\n  <app-currency-dropdown\n    [currency]=\"currency\"\n    [currentCurrency]=\"currentCurrency\"\n    (currencyChange)=\"onCurrencyChange($event)\"\n  ></app-currency-dropdown>\n</p>\n<ul class=\"currency-list\">\n  <li\n    class=\"currency-list__item\"\n    *ngFor=\"let rate of popularRates\"\n  >{{rate?.base}} : {{rate?.rates}}</li>\n</ul>\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"currency-input\">\n  <input\n    class=\"currency-input__input\"\n    type=\"text\"\n    [value]=\"format(currentConverter?.walletValue, SEPARATOR)\"\n    [formControl]=\"inputValueControl\"\n    (keypress)=\"onChange($event)\"\n  >\n  <app-currency-dropdown\n    [currentCurrency]=\"currentConverter\"\n    [currency]=\"currency\"\n    (currencyChange)=\"onWalletChange($event)\"\n  ></app-currency-dropdown>\n</div>\n<!--\n<input type=\"text\" [value]=\"unConvertedValue\" [formControl]=\"inputValueControl\">\n<select (change)=\"onValetChange($event.target.value)\">\n  <option\n    *ngFor=\"let valet of valets\"\n    [value]=\"valet.valet\"\n    [selected]=\"valet.valet === currentValet\"\n  >{{valet.valet}}</option>\n</select>\n\n<select (change)=\"onWalletChange($event.target.value)\">\n    <option\n      *ngFor=\"let wallet of currency\"\n      [value]=\"wallet?.walletName\"\n      [selected]=\"wallet?.walletName === currentConverter?.walletName\"\n    >{{wallet?.walletName}}</option>\n  </select>\n\n\n-->\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<app-currency-input\n  *ngFor=\"let converter of converters\"\n  [currentConverter]=\"converter\"\n  [currency]=\"currency\"\n  (currencyInputChange)=\"onCurrencyInputChange($event)\"\n></app-currency-input>\n<button class=\"currency-btn\" (click)=\"addConverter()\">Добавить конвертер</button>\n<div>\n  <app-currency-info\n    [currency]=\"currency\"\n    [popularRates]=\"popularRates\"\n    (walletChange)=\"updatePopularRates($event)\"\n  ></app-currency-info>\n</div>\n<!--\n\n<app-currency-dropdown\n  *ngFor=\"let converter of converters\"\n  [currency]=\"currency\"\n  [currentCurrency]=\"converter\"\n></app-currency-dropdown>\n\n\n-->\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASE_URL = 'http://api.fixer.io';
var WALLETS_URL = 'https://currencywidget.firebaseio.com/';
var baseWallet = 'RUB';







var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
        this.cachedRates = [];
        this.converters = [{
                walletName: 'RUB',
                walletValue: 0
            }, {
                walletName: 'USD',
                walletValue: 0
            }];
    }
    CurrencyService.prototype.getConverters = function () {
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
    };
    CurrencyService.prototype.getCurrentCurrency = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/latest?base=" + baseWallet)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.rates = _this.convertToRatesObject(data);
            return _this.rates;
        })
            .map(function (rates) {
            _this.currency = _this.convertToCurrencyArray(rates);
            return _this.currency;
        });
    };
    CurrencyService.prototype.initialize = function () {
        var _this = this;
        this.loadActualRates().subscribe(function (rates) { _this.rates = rates; });
        this.loadPopularWallets().subscribe(function (popularWallets) {
            _this.popularWallets = popularWallets;
        });
        return this.loadWalletsLocalization();
        //return initialRequests$;//.subscribe(data => console.log('combined:', data));
    };
    CurrencyService.prototype.loadActualRates = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/latest?base=" + baseWallet)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return _this.convertToRatesObject(data);
        })
            .catch(function (err) {
            console.warn('--- failed loading rates', err);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].empty();
        });
    };
    CurrencyService.prototype.loadPopularWallets = function () {
        return this.http.get(WALLETS_URL + "popular.json")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return Object.keys(data)
                .map(function (key) {
                return Object.assign({}, { key: key }, data[key]);
            });
        })
            .catch(function (err) {
            console.warn('--- failed loading popular wallets', err);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].empty();
        });
    };
    CurrencyService.prototype.loadWalletsLocalization = function () {
        var _this = this;
        return this.http.get(WALLETS_URL + "currency.json")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return Object.keys(data)
                .map(function (key) {
                return Object.assign({}, { walletName: key }, { walletLocaleName: data[key] });
            });
        })
            .map(function (wallets) {
            return wallets.sort(_this.compareWalletNames);
        })
            .catch(function (err) {
            console.warn('--- failed loading localization', err);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].empty();
        });
    };
    CurrencyService.prototype.compareWalletNames = function (name1, name2) {
        if (name1.walletLocaleName < name2.walletLocaleName) {
            return -1;
        }
        if (name1.walletLocaleName > name2.walletLocaleName) {
            return 1;
        }
        return 0;
    };
    CurrencyService.prototype.getCurrencyRates = function (baseWallet) {
        var _this = this;
        var currency;
        if (this.cachedRates) {
            currency = this.cachedRates.find(function (item) { return item.base === baseWallet; });
            if (currency)
                return currency.rates;
            //return this.cachedRates[baseWallet];
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
        var CurrencyRatesRequest$ = __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].of(this.popularWallets)
            .switchMap(function (wallets) {
            var urls = wallets.map(function (wallet) {
                return BASE_URL + "/latest?base=" + wallet.walletName + "&symbols=" + baseWallet;
            });
            var requests = urls.map(function (url) {
                return _this.http.get(url)
                    .map(function (res) {
                    var data = res.json();
                    //const resp = Object.assign({}, {[data.base]: data.rates[baseWallet]});
                    //console.log('---body',resp);
                    return data;
                });
            });
            return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].combineLatest(requests);
        })
            .do(function (rates) {
            console.log('---r', rates);
            var el = Object.keys(rates)
                .map(function (key) {
                return Object.assign(rates[key], { rates: rates[key].rates[baseWallet] });
            });
            console.log('after mute', el);
            _this.cachedRates.push(Object.assign({}, { base: baseWallet }, { rates: rates }));
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
    };
    // getPopularRates() {
    //   fetch(`${WALLETS_URL}popular.json`)
    //     .then(res => {return res.json()})
    //     .then(data => {
    //       return Object.keys(data)
    //         .map(key => Object.assign({}, {key}, data[key]));
    //     })
    //     .then(wallets => this.popularRates = wallets);
    // }
    CurrencyService.prototype.getCurrencyRatesPromise = function (baseWallet) {
        return fetch(WALLETS_URL + "popular.json")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            return Object.keys(data)
                .map(function (key) { return Object.assign({}, { key: key }, data[key]); });
        })
            .then(function (wallets) {
            console.log(wallets);
            return wallets
                .filter(function (wallet) { return wallet.walletName !== baseWallet; })
                .map(function (wallet) {
                return BASE_URL + "/latest?base=" + wallet.walletName + "&symbols=" + baseWallet;
            });
        })
            .then(function (urls) {
            return urls.map(function (url) {
                return fetch(url)
                    .then(function (res) { return res.json(); });
            });
        })
            .then(function (promises) {
            return Promise.all(promises);
        })
            .then(function (data) {
            return Object.keys(data)
                .map(function (key) {
                return Object.assign(data[key], { rates: data[key].rates[baseWallet] });
            });
        })
            .catch(function (err) {
            console.log('--- oops', err.message);
            throw err;
        });
        //.then(data => console.log('---promise', data));
    };
    CurrencyService.prototype.updateConverters = function (value, wallet) {
        var _this = this;
        if (!this.converters)
            this.converters = this.getConverters();
        this.converters
            .map(function (converter) {
            converter.walletValue = _this.convertValue(value, wallet, converter.walletName);
        });
        this.saveConverters();
        return this.converters;
    };
    CurrencyService.prototype.addConverter = function () {
        var converter = {
            walletName: "RUB",
            walletValue: 0
        };
        this.converters.push(converter);
        console.log('--- converters', this.converters);
    };
    CurrencyService.prototype.saveConverters = function () {
        var convertersWallets = [];
        this.converters.forEach(function (conv) { convertersWallets.push(conv.walletName); });
        localStorage.setItem('converters', JSON.stringify(convertersWallets));
    };
    CurrencyService.prototype.convertValue = function (value, fromWallet, toWallet) {
        //let converted: number = (value / this.rates[fromWallet]) * this.rates[toWallet];
        //converted.toFixed(2);
        return parseFloat(((value / this.rates[fromWallet]) * this.rates[toWallet]).toFixed(2));
    };
    CurrencyService.prototype.convertToRatesObject = function (data) {
        var ratesObject = {};
        Object.assign(ratesObject, (_a = {}, _a[data.base] = 1, _a));
        for (var key in data.rates) {
            Object.assign(ratesObject, (_b = {}, _b[key] = data.rates[key], _b));
        }
        return ratesObject;
        var _a, _b;
    };
    CurrencyService.prototype.convertToCurrencyArray = function (rates) {
        return Object.keys(rates).map(function (key) { return { walletName: key }; });
    };
    return CurrencyService;
}());
CurrencyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CurrencyService);

var _a;
//# sourceMappingURL=currency.service.js.map

/***/ })

},[476]);
//# sourceMappingURL=main.bundle.js.map