import { Component, Input, OnInit } from '@angular/core';
import { ICollectionItems } from 'src/app/models/ICollectionItems.interfaces';


@Component({
  selector: 'app-type-collection',
  templateUrl: './type-collection.component.html',
  styleUrls: ['./type-collection.component.scss']
})
export class TypeCollectionComponent {
  @Input() url:string='';
  @Input() collectionImg:string='';
  @Input() collectionName:string='';
  @Input() dataCollection:ICollectionItems[]=[];


}
