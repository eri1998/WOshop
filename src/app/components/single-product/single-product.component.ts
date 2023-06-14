import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';
import { SlideShowService } from 'src/app/services/slide-show.service';
import { CartService } from '../cart-service/cart-service.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  singleProduct:ICollectionItems[]=[];
  id:number=0;
  description:string='';
  constructor(private _slideShow : SlideShowService,private _cartService:CartService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id)
      this._slideShow.getSlideShowData().subscribe((data) => {
        this.description = data[this.id].description
        this.singleProduct = data[this.id].collectionItems; 
        console.log(this.singleProduct)
      });
    });
    
  }
  addToCart(){
    console.log(this.id)
    console.log(this.singleProduct[0].price)
    const product: ICollectionItems = {
      price: this.singleProduct[0].price,
      itemType: this.singleProduct[0].itemType,
      quantity:this.singleProduct[0].quantity,
      variantsItems: [
        {
          color: this.singleProduct[0].variantsItems[0].color,
          sizes: this.singleProduct[0].variantsItems[0].sizes,
          variantsImage: this.singleProduct[0].variantsItems[0].variantsImage
        }
      ]
    }; 
    const existingProduct = this._cartService.getItems().find(item => 
      item.itemType === product.itemType &&
      item.variantsItems[0].color === product.variantsItems[0].color &&
      item.variantsItems[0].sizes === product.variantsItems[0].sizes
    );
    
    if (existingProduct) {
      product.quantity +=  this.singleProduct[0].quantity; 
      product.price +=this.singleProduct[0].price;
      existingProduct.price = product.price/2;
      this._cartService.updateCartItem(existingProduct);
    } else {
      this._cartService.addToCart(product);
     
    }
  }
}
