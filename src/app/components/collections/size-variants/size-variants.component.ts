import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-size-variants',
  templateUrl: './size-variants.component.html',
  styleUrls: ['./size-variants.component.scss']
})
export class SizeVariantsComponent{

 @Input() selectedVariant:any;
 @Output() sizeSelected = new EventEmitter<string>();
 selectedSizeBorder: string='';
 
 selectSize(size:string){
    this.selectedSizeBorder = size;
    this.sizeSelected.emit(size);
    
    
  }


}
