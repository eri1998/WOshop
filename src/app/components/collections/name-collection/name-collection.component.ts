import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-collection',
  templateUrl: './name-collection.component.html',
  styleUrls: ['./name-collection.component.scss']
})
export class NameCollectionComponent {
@Input() collectionName:string='';
}
