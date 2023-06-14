import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDropMenu } from '../models/IDropMenu.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DropMenuService {

  constructor(private _http: HttpClient) { 
    
  }
  getDropMenuData(){
    return this._http.get<IDropMenu[]>('/assets/json/dropMenu.json') 
     }
}

  