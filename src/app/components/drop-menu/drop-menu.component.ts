import { Component, OnInit } from '@angular/core';
import { IDropMenu } from 'src/app/models/IDropMenu.interfaces';
import { DropMenuService } from 'src/app/services/drop-menu.service';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {
public dropMenuData:IDropMenu[]=[];
constructor(private _dropMenuServices:DropMenuService){

}
  ngOnInit(): void {
    this._dropMenuServices.getDropMenuData().subscribe((response:IDropMenu[])=>{
    this.dropMenuData=response;
  })
}
}