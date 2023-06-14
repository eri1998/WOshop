import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewArriwalsComponent } from "./components/new-arriwals/new-arriwals.component";
import { CitySeriesComponent } from "./components/city-series/city-series.component";
import { ShopOnlineComponent } from "./components/shop-online/shop-online.component";
import { DetailsCollectionComponent } from "./components/collections/details-collection/details-collection.component";
import { CheckOutComponent } from "./components/cart/check-out/check-out.component";
import { LikedProductsComponent } from "./components/liked-products/liked-products.component";
import { SingleProductComponent } from "./components/single-product/single-product.component";





const routes: Routes = [
 {
 path:"",
 redirectTo:"/home",
 pathMatch:"full"

},
{
    path:'home',
    component:HomeComponent
},
   
{ path:'shopOnline',
    component:ShopOnlineComponent
},
   
{ path:'CITY SERIES',
    component:CitySeriesComponent
},
{path:'newArriwals/:id',
    component:NewArriwalsComponent
}, 
{ path:'detailsCollection/:id',
component:DetailsCollectionComponent
},
{ path:'checkout',
component:CheckOutComponent
},
{ path:'likedProducts',
component:LikedProductsComponent
},
{ path:'singleProduct/:id',
component:SingleProductComponent
},
{
    path:'**',
    component:HomeComponent
}
    
    
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}