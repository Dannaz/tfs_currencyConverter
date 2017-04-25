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
  REGEXP_PATTERN: string = '^[0-9]+\.?[0-9]+$';
  regExp: RegExp;
  SEPARATOR: string = ' ';

  @Input() currentConverter;
  @Input() currency: object[];

  @Output() currencyInputChange = new EventEmitter();

  inputValueControl = new FormControl();

  constructor(private currencyService: CurrencyService) {
    this.regExp = new RegExp(this.REGEXP_PATTERN);
  }

  ngOnInit() {
    this.inputValueControl.valueChanges.subscribe((inputValue) => {
     // console.log('--- new value', inputValue);
     // console.log('---format', this.format(parseFloat(inputValue), ' '));
     // console.log('---parsed', this.parse(parseFloat(this.format(parseFloat(inputValue), ' ')), ' '));
     this.currentConverter.walletValue = this.parse(inputValue, this.SEPARATOR);
     this.currencyInputChange.emit(this.currentConverter);
    });
  }

  format(number :number, separator: string){
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
  }

  parse(number: number, separator: string){
    return number.toString().split(separator).join('');
    //return number.toString().replace(separator,'');
  }

  onWalletChange(walletName){
    this.currentConverter.walletName = walletName;
    this.currencyInputChange.emit(this.currentConverter);
  }
  onChange(evt){
  }
}
