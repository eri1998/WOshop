import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';
import { ICollectionType } from 'src/app/models/ICollectionType.inerfaces';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-new-arriwals',
  templateUrl: './new-arriwals.component.html',
  styleUrls: ['./new-arriwals.component.scss']
})
export class NewArriwalsComponent implements OnInit {
  productJsonData: ICollectionType[] = [];
  newArriwalProducts: ICollectionItems[] = [];
  allProducts: ICollectionItems[] = [];
  najnizaCena: number = 0;
  public id: number = 0;

  constructor(private _productsService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.fetchProductsData();
    });
  }

  fetchProductsData(): void {
    this._productsService.getProductsData().subscribe((data: ICollectionType[]) => {
      this.productJsonData = data;
      this.filterProductsByCurrentId();
    });
  }

  filterProductsByCurrentId(): void {
    const selectedItem = this.productJsonData.find(item => item.id === this.id);
    if (selectedItem) {
      this.newArriwalProducts = selectedItem.collectionItems;
      this.allProducts = this.newArriwalProducts;
    } else {
      this.newArriwalProducts = [];
      this.allProducts = [];
    }
  }

  handleFilteredProductsChange(filteredProducts: ICollectionItems[]): void {
    this.newArriwalProducts = filteredProducts;
  }
}
