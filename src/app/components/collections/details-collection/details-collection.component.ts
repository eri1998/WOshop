import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICollectionType } from 'src/app/models/ICollectionType.inerfaces';
import { IVariantItemOfCollection } from 'src/app/models/IVariantItemOfCollection.interfaces';
import { CollectionsService } from 'src/app/services/collections.service';


@Component({
  selector: 'app-details-collection',
  templateUrl: './details-collection.component.html',
  styleUrls: ['./details-collection.component.scss']
})
export class DetailsCollectionComponent implements OnInit {
  id :number=0; 
  public collections:ICollectionType[]=[];
  public variants:IVariantItemOfCollection[]=[];

  constructor(private route: ActivatedRoute,private _collectionService:CollectionsService) {

   }
  
  ngOnInit() {
   
  this.route.params.subscribe(params => {
    this.id = +params['id'];
    this._collectionService.getCollectionsData().subscribe((data) => {
      this.collections = data.flatMap(el => el.collectionsType.filter(c => c.id === this.id)); 
      console.log(this.collections)
    });
  });
  }
   
  

}

