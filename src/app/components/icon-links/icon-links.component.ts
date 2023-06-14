import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-icon-links',
  templateUrl: './icon-links.component.html',
  styleUrls: ['./icon-links.component.scss']
})
export class IconLinksComponent {
  @Output() toggleClass = new EventEmitter<boolean>();
  switchClass:boolean=true;
  sendBoleanValue() {
    this.switchClass = !this.switchClass;
    this.toggleClass.emit(this.switchClass);
  }

}

