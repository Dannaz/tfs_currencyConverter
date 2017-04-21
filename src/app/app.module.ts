import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import {CurrencyService} from "./shared/services/currency.service";
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { CurrencyDropdownComponent } from './currency-dropdown/currency-dropdown.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrencyInputComponent,
    CurrencyDropdownComponent,
    CurrencyInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
