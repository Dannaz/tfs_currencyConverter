import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurrency} from "../shared/model/icurrency";
import {CurrencyService} from "../shared/services/currency.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent implements OnInit {

  @Input() currentConverter;
  @Input() currency: object[];

  @Output() currencyInputChange = new EventEmitter();

  inputValueControl = new FormControl();

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.inputValueControl.valueChanges.subscribe((inputValue) => {
     console.log('--- new value', inputValue);
     this.currentConverter.walletValue = inputValue;
     this.currencyInputChange.emit(this.currentConverter);
    });
  }

  onWalletChange(walletName){
    this.currentConverter.walletName = walletName;
    this.currencyInputChange.emit(this.currentConverter);
  }





}
