import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-collection',
  templateUrl: './image-collection.component.html',
  styleUrls: ['./image-collection.component.scss']
})
export class ImageCollectionComponent {
  @Input() images:string='';
}
