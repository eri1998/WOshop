import { Component } from '@angular/core';

@Component({
  selector: 'app-header-holder',
  templateUrl: './header-holder.component.html',
  styleUrls: ['./header-holder.component.scss']
})
export class HeaderHolderComponent {
  isClassVisible = true;
   
  receiveData(data: boolean) {
   
      this.isClassVisible = data;
    
   
  }
}
