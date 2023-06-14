import { Component, OnInit } from '@angular/core';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';
import { CartService } from '../cart-service/cart-service.component';

@Component({
  selector: 'app-liked-products',
  templateUrl: './liked-products.component.html',
  styleUrls: ['./liked-products.component.scss']
})
export class LikedProductsComponent implements OnInit{
  public likeProducts:ICollectionItems[]=[];
  constructor(private _cartService:CartService){

  }
  ngOnInit(): void {
    this.likeProducts = this._cartService.getLikeProducts();
    console.log(this.likeProducts)
  }
  addToCart(index:number) {
    const product: ICollectionItems = {
      price: this.likeProducts[index].price,
      itemType: this.likeProducts[index].itemType,
      quantity:this.likeProducts[index].quantity,
      variantsItems: [
        {
          color: this.likeProducts[index].variantsItems[0].color,
          sizes: this.likeProducts[index].variantsItems[0].sizes,
          variantsImage: this.likeProducts[index].variantsItems[0].variantsImage
        }
      ]
    }; 
    const existingProduct = this._cartService.getItems().find(item => 
      item.itemType === product.itemType &&
      item.variantsItems[0].color === product.variantsItems[0].color &&
      item.variantsItems[0].sizes === product.variantsItems[0].sizes
    );
    
    if (existingProduct) {
      product.quantity +=  this.likeProducts[0].quantity; 
      product.price +=this.likeProducts[0].price;
      existingProduct.price = product.price/2;
      this._cartService.updateCartItem(existingProduct);
    } else {
      this._cartService.addToCart(product);
      console.log('Proizvod je uspešno dodat u korpu.');
      // komponenta za message il div
    }
  }
  removeItem(index:number){
    this.likeProducts.splice(index, 1);
  }
}
