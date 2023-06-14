import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IVariantItemOfCollection } from 'src/app/models/IVariantItemOfCollection.interfaces';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-color-variants',
  templateUrl: './color-variants.component.html',
  styleUrls: ['./color-variants.component.scss']
})
export class ColorVariantsComponent  {
  @Input()  variantsItems:IVariantItemOfCollection[]=[];
  @Output() selectedColor = new EventEmitter<string>();
  collorItem:ICollectionItems[]=[];
  firstColor:string='';
  public border = false;
  color: string='';
 
  constructor(private _collectionService:CollectionsService){
    _collectionService.getCollectionsData().subscribe((element)=>{
   
    })
  }

  
  selectColor(color: string) {
    this.selectedColor.emit(color);
    this.color = color;
    this.border = true;
  }
  isFirstItem(index: number): boolean {
    return index === 0;
  }
}
