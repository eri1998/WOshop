import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INavLinks } from '../models/INavLinks.interfaces';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private _http: HttpClient ) { 
    
  }
  getNavLinks(){
 return this._http.get<INavLinks[]>('/assets/json/navigations.json') 
  }
}
