import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ICategoryType } from '../models/ICategoryType.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getProducts() {
    return this._http.get<ICategoryType[]>('/assets/json/category.json') 
  }

  constructor(private _http:HttpClient) { }
 
}
