import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICollectionData } from '../models/ICollectionData.interfaces';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CollectionsService {


  constructor(private _http: HttpClient) { 
    
  }
  getCollectionsData():Observable<ICollectionData[]>{
    return  this._http.get<ICollectionData[]>('/assets/json/collections.json') 
   
     
     }
  
}
