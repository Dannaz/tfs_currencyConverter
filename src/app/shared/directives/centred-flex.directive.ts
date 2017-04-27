import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCentredFlex]'
})
export class CentredFlexDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.width = '300px';
    //el.nativeElement.style.height = '300px';
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.justifyContent = 'center';
    el.nativeElement.style.alignItems = 'center';
    el.nativeElement.style.flexWrap = 'wrap';
  }

}
