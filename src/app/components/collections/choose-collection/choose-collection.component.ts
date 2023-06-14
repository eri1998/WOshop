import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICollectionData } from 'src/app/models/ICollectionData.interfaces';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-choose-collection',
  templateUrl: './choose-collection.component.html',
  styleUrls: ['./choose-collection.component.scss']
})
export class ChooseCollectionComponent implements OnInit {
public collectionData:ICollectionData[]=[];
constructor (private _collectionService:CollectionsService){
}
ngOnInit(): void {
  this._collectionService.getCollectionsData().subscribe((responseData:ICollectionData[])=>{
  this.collectionData=responseData;
  })
 }
 
}
