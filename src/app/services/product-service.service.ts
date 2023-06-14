import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICollectionType } from '../models/ICollectionType.inerfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  constructor(private _http: HttpClient) { 
    
  }
  getProductsData():Observable<ICollectionType[]>{
    return  this._http.get<ICollectionType[]>('/assets/json/products.json') 
   
     
     }
}
