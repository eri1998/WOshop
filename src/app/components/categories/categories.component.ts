import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategoryType } from 'src/app/models/ICategoryType.interfaces';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnChanges {
  @Input() products: ICollectionItems[] = [];
  @Input() id: number = 0;
  @Output() filteredProductsChange: EventEmitter<ICollectionItems[]> = new EventEmitter<ICollectionItems[]>();
  filteredProducts: ICollectionItems[] = [];
  priceFilterProduct: ICollectionItems[] = [];
  priceArr: number[] = [];
  categoryIds: string = '';
  returnAllProductsButton = false;
  selectedCategory: string = '';
  searchPrice: number = 0;

  constructor(private _categoryService: CategoryService, private _productService: ProductService) {}

  ngOnInit(): void {
   
    this._categoryService.getProducts().subscribe((response: ICategoryType[]) => {
      this.categoryIds = response[0].name;
      this.updateSearchPrice();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.returnAllProductsButton=false;
      this.updateSearchPrice();
    }
  }

  updateSearchPrice(): void {
    this.priceArr = this.products.map(product => product.price);
    this.searchPrice = Math.min(...this.priceArr);
  }

  emitFilteredProducts(category: string) {
    
    this.filteredProducts = [];
    this.selectedCategory = category;
    this.products.filter(product => {
      if (product.categoryId === this.selectedCategory) {
        this.filteredProducts.push(product);
        this.filteredProductsChange.emit(this.filteredProducts);
        this.returnAllProductsButton = true;
      }
    });
    this.priceArr = this.filteredProducts.map(product => product.price);
    this.searchPrice = Math.min(...this.priceArr);
  }

  returnAll() {
    this.filteredProducts = this.products;
    this.filteredProductsChange.emit(this.filteredProducts);
    this.returnAllProductsButton = false;
  }

  getProductsToShow() {
    if (this.searchPrice && this.filteredProducts.length > 0) {
      this.priceFilterProduct = this.filteredProducts.filter(product => product.price <= this.searchPrice);
    } else {
      this.priceFilterProduct = this.products.filter(product => product.price <= this.searchPrice);
    }
    this.filteredProductsChange.emit(this.priceFilterProduct);
  }
}



