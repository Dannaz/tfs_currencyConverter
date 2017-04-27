import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurrency} from '../shared/model/icurrency';
import {CurrencyService} from '../shared/services/currency.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent implements OnInit {
  REGEXP_PATTERN: string = '^[0-9]+\.?[0-9]+$';
  regExp: RegExp;
  SEPARATOR: string = ' ';

  @Input() currentConverter;
  @Input() currency: object[];

  @Output() currencyInputChange = new EventEmitter();
  @Output() converterDelete = new EventEmitter();

  inputValueControl = new FormControl();

  constructor() {
    this.regExp = new RegExp(this.REGEXP_PATTERN);
  }

  ngOnInit() {
    this.inputValueControl.valueChanges.subscribe((inputValue) => {
      this.currentConverter.walletValue = this.parse(inputValue, this.SEPARATOR);
      this.currencyInputChange.emit(this.currentConverter);
    });
  }

  format(number: number, separator: string) {
    if (isNaN(number)) {
      return '0';
    }
    return number.toString().split(/(?=(?:\d{3})+(?!\d))/).join(separator);
  }

  parse(number: number, separator: string) {
    return number.toString().split(separator).join('');
  }

  onWalletChange(walletName) {
    this.currentConverter.walletName = walletName;
    this.currencyInputChange.emit(this.currentConverter);
  }

  deleteInput() {
    this.converterDelete.emit(this.currentConverter);
  }
}
