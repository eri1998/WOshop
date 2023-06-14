import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISlideShow } from '../models/ISlideShow.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SlideShowService {

  constructor(private _http:HttpClient) { 

  }
  getSlideShowData(){
    return this._http.get<ISlideShow[]>('/assets/json/showSlide.json') 
     }
}
