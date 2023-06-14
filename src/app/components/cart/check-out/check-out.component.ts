import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart-service/cart-service.component';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
items: ICollectionItems[] = [];
public subTotal:number=0;
public total:number =0;
taxes:number=10;
shipping:number = 5;
showPaymentComponent = false;

constructor(private _cartService:CartService){

}
  ngOnInit(): void {
    this.items = this._cartService.getItems();
    this.subTotal = this._cartService.calculateSubtotal();
    this.total = this.subTotal + this.taxes + this.shipping ;
    this._cartService.getCartItems().subscribe((items) => {
      this.items = this._cartService.getItems();
      this.subTotal = this._cartService.calculateSubtotal();
      this.total = this.subTotal + this.taxes + this.shipping ;
      
    });
  }

  updateQuantity(index: number, quantity: number) {
    this.items[index].quantity = quantity;
    this.subTotal = this._cartService.calculateSubtotal();
    this.total = this.subTotal + this.taxes + this.shipping ;



  }
  updatePrice(index: number, subTotal: number) {
    this.subTotal = this._cartService.calculateSubtotal();
    if(subTotal===0){
      this.taxes =0;
      this.shipping = 0; 
      this.total = 0;
    }else{
      this.total = this.subTotal + this.taxes + this.shipping ;

    }
   
  }
}
