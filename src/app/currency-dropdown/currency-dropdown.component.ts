import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.css']
})
export class CurrencyDropdownComponent implements OnInit {

  constructor() { }

  @Input() currentCurrency;
  @Input() currency: object[];

  @Output() currencyChange = new EventEmitter();


  ngOnInit() {
  }

  onItemClick(target){
    console.log(target);
    if (target.classList.contains('dropdown-content__item')) {
      if(target.dataset.wallet !== this.currentCurrency.walletName){
        Object.assign(this.currentCurrency, {walletName: target.dataset.wallet});
        this.currencyChange.emit(this.currentCurrency.walletName);
      }
    }
  }

}
