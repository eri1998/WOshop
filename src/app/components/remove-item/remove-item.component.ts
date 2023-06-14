import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart-service/cart-service.component';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent implements OnInit {
  @Input() index:number=0;
  @Input() subTotal:number=0;
  @Output() subTotalChange = new EventEmitter<number>();
  items:ICollectionItems[]=[];
  
  constructor(private _cartService:CartService){

  }
  ngOnInit(): void {
  this.items = this._cartService.getItems();
  this._cartService.getCartItems().subscribe((items) => {
  this.items = this._cartService.getItems();
  this.subTotal = this._cartService.calculateSubtotal();
});
    
   }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.subTotal = this.items.reduce((total, item) => total + item.price, 0);
    this.subTotalChange.emit(this.subTotal);
    
    
  }
 

}
