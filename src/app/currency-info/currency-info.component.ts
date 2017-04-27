import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.css']
})
export class CurrencyInfoComponent implements OnInit {

  currencySellStatus: boolean = true;

  @Input() currency;
  @Input() popularRates: object;

  @Output() walletChange = new EventEmitter();

  currentCurrency = {walletName: 'RUB'};

  constructor() { }

  ngOnInit() {
  }

  isSell(): boolean {
    return this.currencySellStatus;
  }

  onChange(event) {
    this.currencySellStatus = event.target.checked;
  }

  onCurrencyChange(value) {
    this.walletChange.emit(value);
  }

}
