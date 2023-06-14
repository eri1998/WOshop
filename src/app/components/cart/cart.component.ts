import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart-service/cart-service.component';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() showCartItems = false;
  



  toggleCart() {
    this.showCartItems = !this.showCartItems;
  }
  onCloseCart() {
    this.showCartItems = false;
  }
}
