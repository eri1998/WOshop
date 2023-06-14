import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderHolderComponent } from './components/header-holder/header-holder.component';
import { LogotipComponent } from './components/logotip/logotip.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { HomeComponent } from './components/home/home.component';
import { NewArriwalsComponent } from './components/new-arriwals/new-arriwals.component';
import { ShopOnlineComponent } from './components/shop-online/shop-online.component';
import { CitySeriesComponent } from './components/city-series/city-series.component';
import { SaleComponent } from './components/sale/sale.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { AppRoutingModule } from './app-routing.module';
import { HeartPulseComponent } from './components/heart-pulse/heart-pulse.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { IconLinksComponent } from './components/icon-links/icon-links.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropMenuComponent } from './components/drop-menu/drop-menu.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterListItemComponent } from './components/footer-list-item/footer-list-item.component';
import { FooterSocialMediaComponent } from './components/footer-social-media/footer-social-media.component';
import { FooterFormComponent } from './components/footer-form/footer-form.component';
import { ChooseCollectionComponent } from './components/collections/choose-collection/choose-collection.component';
import { TypeCollectionComponent } from './components/collections/type-collection/type-collection.component';
import { NameCollectionComponent } from './components/collections/name-collection/name-collection.component';
import { ImageCollectionComponent } from './components/collections/image-collection/image-collection.component';
import { DetailsCollectionComponent } from './components/collections/details-collection/details-collection.component';
import { CollectionItemsComponent } from './components/collections/collection-items/collection-items.component';
import { ColorVariantsComponent } from './components/collections/color-variants/color-variants.component';
import { ProductImageComponent } from './components/collections/product-image/product-image.component';
import { SizeVariantsComponent } from './components/collections/size-variants/size-variants.component';
import { PriceComponent } from './components/collections/price/price.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { FormsModule } from '@angular/forms';
import { CheckOutComponent } from './components/cart/check-out/check-out.component';
import { LoginComponent } from './components/loginFolder/login/login.component';
import { LogoutComponent } from './components/loginFolder/logout/logout.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { RemoveItemComponent } from './components/remove-item/remove-item.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LikedProductsComponent } from './components/liked-products/liked-products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderHolderComponent,
    LogotipComponent,
    NavigationsComponent,
    HomeComponent,
    NewArriwalsComponent,
    ShopOnlineComponent,
    CitySeriesComponent,
    SaleComponent,
    OutletComponent,
    HeartPulseComponent,
    CartComponent,
    UserComponent,
    IconLinksComponent,
    DropMenuComponent,
    SlideShowComponent,
    FooterComponent,
    FooterListItemComponent,
    FooterSocialMediaComponent,
    FooterFormComponent,
    ChooseCollectionComponent,
    TypeCollectionComponent ,
    NameCollectionComponent,
    ImageCollectionComponent,
    DetailsCollectionComponent,
    CollectionItemsComponent,
    ColorVariantsComponent,
    ProductImageComponent,
    SizeVariantsComponent,
    PriceComponent,
    CartItemsComponent,
    CheckOutComponent,
    LoginComponent,
    LogoutComponent,
    QuantityComponent,
    RemoveItemComponent,
    PaymentComponent,
    CategoriesComponent,
    LikedProductsComponent,
    SingleProductComponent

   
   
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
