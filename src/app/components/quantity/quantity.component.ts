import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart-service/cart-service.component';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit{
  constructor(private _cartService:CartService){
  }
  
ngOnInit(): void {
  this.items = this._cartService.getItems();
}
public items:ICollectionItems[]=[];
@Input() quantity: number=1;
@Input() price: number=0;
@Input() index: number=0;
@Output() quantityChange = new EventEmitter<number>();
subTotal: number = 0; 
quantityInput:string='1';

povecaj(index: number) {
  this.quantity++;
  this._cartService.incrementItemQuantity(index);
  const price = this.items[index].price;
  const quantity = this.items[index].quantity;
  this.items[index].price = this._cartService.calculatePriceForIncrement(price, quantity, index);
  this.quantityChange.emit(this.quantity);
}

smanji(index: number) {
  this.quantity--;
  this._cartService.decrementItemQuantity(index);
  const price = this.items[index].price;
  const quantity = this.items[index].quantity;
  this.items[index].price = this._cartService.calculatePriceForDecrement(price, quantity);
  this.quantityChange.emit(this.quantity);
}
}


