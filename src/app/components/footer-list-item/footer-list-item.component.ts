import { Component, Input } from '@angular/core';
import { IFooterData } from 'src/app/models/IFooterData.interfaces';

@Component({
  selector: 'app-footer-list-item',
  templateUrl: './footer-list-item.component.html',
  styleUrls: ['./footer-list-item.component.scss']
})
export class FooterListItemComponent {

  @Input() items: IFooterData[]=[];


}
