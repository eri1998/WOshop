import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent  {
  @Input() collectionImage: string[]=[];
  currentImageIndex = 0;
  public interval:ReturnType<typeof setInterval> | undefined=undefined;
  changeImage() {
   this.interval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.collectionImage.length;
    }, 1000);
  }
  stopChangeImage(){
    this.currentImageIndex=0;
   clearInterval(this.interval);
  }
}
