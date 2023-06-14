import { Component } from '@angular/core';
import { CartService } from '../cart-service/cart-service.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  userData:Record<string,string> = {
    firstName: '',
    lastName: "",
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'credit-card'
  };

  constructor(private _cartService: CartService) {}

  submitForm() {
    const productsInCart = this._cartService.getItems(); 

    if(this.validateForm()){
      const orderData = {
    
        userInfo: this.userData,
        products: productsInCart
      
      };  console.log(orderData)
    }else{
  
      window.alert('Molim vas popunite ispravno podatke');
    }
   
  
    
      
}
validateForm(): boolean {
  
  for (const field in this.userData) {
    if (this.userData.hasOwnProperty(field) && this.userData[field] === '') {
      return false;
    }
  }
  return true;
}

}


