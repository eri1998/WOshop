import { Component, Input, OnInit} from '@angular/core';

import { IVariantItemOfCollection } from 'src/app/models/IVariantItemOfCollection.interfaces';

import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';
import { CartService } from '../../cart-service/cart-service.component';


@Component({
  selector: 'app-collection-items',
  templateUrl: './collection-items.component.html',
  styleUrls: ['./collection-items.component.scss']
})
export class CollectionItemsComponent implements OnInit{
@Input() itemType:string='';
@Input() price:number=0;
@Input() variantsItems:IVariantItemOfCollection[]=[];
private likedProducts:ICollectionItems[]=[];

quantity:number = 1;
selectedSize: string='';
selectedVariantSizes: any;
showSizes = false;
selectedVariant :any;
showSizeVariants: boolean = false;
showAddToCartButton: boolean = false;
isDisabled = false;

constructor(private _cartService: CartService) {}

ngOnInit(): void {
 this.selectedVariant = this.variantsItems[0];

}


onColorSelected(color: string) {

  this.selectedVariant = this.variantsItems.find(item => item.color === color);
  this.selectedVariantSizes = this.selectedVariant.sizes;
  this.showSizes = true;
  if (this.selectedVariantSizes.includes(this.selectedSize)) {
    this.selectedVariantSizes = this.selectedVariant.sizes;
  }else{
    this.selectedSize = '';
  }
}

onSelectedSizes(size: string) {
  this.showSizes = true;
  this.selectedSize = size;
  this.showAddToCartButton = true;
 
  
}


addToCart() {
  const product: ICollectionItems = {
    price: this.price,
    itemType: this.itemType,
    quantity:this.quantity,
    variantsItems: [
      {
        color: this.selectedVariant.color,
        sizes: this.selectedSize,
        variantsImage: this.selectedVariant.variantsImage
      }
    ]
  }; 
  const existingProduct = this._cartService.getItems().find(item => 
    item.itemType === product.itemType &&
    item.variantsItems[0].color === product.variantsItems[0].color &&
    item.variantsItems[0].sizes === product.variantsItems[0].sizes
  );
  
  if (existingProduct) {
    product.quantity +=  this.quantity; 
    product.price +=this.price;
    existingProduct.price = product.price/2;
    this._cartService.updateCartItem(existingProduct);
  } else {
    this._cartService.addToCart(product);
    console.log('Proizvod je uspešno dodat u korpu.');
    // komponenta za message il div
  }
}
likeProducts(){
  const product: ICollectionItems = {
    price: this.price,
    itemType: this.itemType,
    quantity:this.quantity,
    variantsItems: [
      {
        color: this.selectedVariant.color,
        sizes: this.selectedSize,
        variantsImage: this.selectedVariant.variantsImage
      }
    ]
  }; 
  const existingProduct = this._cartService.getLikeProducts().find(item => 
    item.itemType === product.itemType &&
    item.variantsItems[0].color === product.variantsItems[0].color &&
    item.variantsItems[0].sizes === product.variantsItems[0].sizes
  );
  
  if (existingProduct) {
   console.log('vec uneto y korpu')
  } else {
    this._cartService.likeProduct(product);
   
    // komponenta za message il div
  }
}

}
