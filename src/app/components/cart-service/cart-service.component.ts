import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new Subject<ICollectionItems[]>();
  private cartItems: ICollectionItems[] = [];
  private likeProducts: ICollectionItems[] = [];
  public subtotal = 0;
  constructor() {}

  addToCart(item: ICollectionItems): void {
    this.cartItems.push(item);
    this.cartItems.reverse();
    this.calculateSubtotal();
    this.cartItemsSubject.next(this.cartItems);
   
   
  }
  likeProduct(item: ICollectionItems): void {
    this.likeProducts.push(item);
    this.likeProducts.reverse();
    
  }
  getLikeProducts() {
    return this.likeProducts;
  }
  getCartItems(): Observable<ICollectionItems[]> {
    return this.cartItemsSubject.asObservable();
  }
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.calculateSubtotal();
    this.cartItemsSubject.next(this.cartItems);
  }
  
  getItems() {
    return this.cartItems;
  }

  public incrementItemQuantity(index: number) {
   
      this.cartItems[index].quantity++;
      this.calculateSubtotal();
      this.cartItemsSubject.next(this.cartItems);
   
    
  }

  public decrementItemQuantity(index: number) {
    
        this.cartItems[index].quantity--;
        this.calculateSubtotal();
        this.cartItemsSubject.next(this.cartItems);
      
  
   
  }
  
   public calculatePriceForIncrement(product: number, quantity: number,i:number):number {
   
    
    if(quantity>2){
      return (product * quantity)/(quantity-1);
    }else{
      return product * quantity;
    }
   
  }
  public calculatePriceForDecrement(price: number, quantity: number): number {
     if(quantity>1){
      return price - (price / (quantity+1));
     }
     else{
      return price/2;
     }
     
    
  }
  updateCartItem(product: ICollectionItems) {
    const index = this.cartItems.findIndex(item => 
      item.itemType === product.itemType &&
      item.variantsItems[0].color === product.variantsItems[0].color &&
      item.variantsItems[0].sizes === product.variantsItems[0].sizes
    );
    if (index !== -1) {
      this.cartItems[index].quantity += 1;
      this.cartItems[index].price = this.cartItems[index].price * this.cartItems[index].quantity;
      this.calculateSubtotal();
      this.cartItemsSubject.next(this.cartItems.slice());
     
    }
    
  }



  public calculateSubtotal() :number{
    this.subtotal = this.cartItems.reduce((acc, item) => {
      return acc + (item.price * item.quantity)/item.quantity;
    

    }, 0);
return this.subtotal;
  }
}
