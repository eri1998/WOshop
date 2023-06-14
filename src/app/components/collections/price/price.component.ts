import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
@Input() price : number = 0;
@Output() isDisabled = new EventEmitter<string>();


disabledButton(){
  this.isDisabled.emit();
}
}
