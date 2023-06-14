import { Component, OnInit } from '@angular/core';
import { ISlideShow } from 'src/app/models/ISlideShow.interfaces';
import { SlideShowService } from 'src/app/services/slide-show.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit  {
  public jsonData: ISlideShow[]=[];
  private startMove!: ReturnType<typeof setInterval>;
  currentIndex = 0;
  constructor(private _slideShow : SlideShowService){
  }
  ngOnInit(): void {
    this._slideShow.getSlideShowData().subscribe((data:ISlideShow[])=>{
    this.jsonData = data;
    this.startSlideShow();
    })
  }
  public stopSlideShow(){
  clearInterval(this.startMove);
  }
  public startSlideShow() {
    this.startMove = setInterval(() => {
      if (this.jsonData[this.currentIndex + 1]) {
        this.currentIndex = (this.currentIndex + 1) % this.jsonData.length;
      } else {
        this.currentIndex = 0; 
      }
    }, 1500);
  }
  
  }
  


  
  
