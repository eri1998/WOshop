import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart-service/cart-service.component';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  @Input() showCart = true;
  @Output() closeCart = new EventEmitter<void>();
  items: ICollectionItems[] = [];
  quantity = 1;
  subTotal: number = 0; 
  

  onCloseCart() {
    this.closeCart.emit();
  }


  constructor(private _cartService: CartService) { }

  updateQuantity(index: number, quantity: number) {
    this.items[index].quantity = quantity;
    this.subTotal = this._cartService.calculateSubtotal();
  }
  updatePrice(index: number, subTotal: number) {
    this.subTotal = this._cartService.calculateSubtotal();
  }

 

  ngOnInit(): void {
    this.subTotal = this._cartService.subtotal;
    this.items = this._cartService.getItems();
    this.subTotal = this._cartService.calculateSubtotal();
    this._cartService.getCartItems().subscribe(() => {
    this.items = this._cartService.getItems();
    this.subTotal = this._cartService.calculateSubtotal();
    
    });
   
  }
 
 
 
}
