import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

trueelement:boolean=true

  @Output()visible=new EventEmitter()

  additem(element:boolean){
  this.trueelement=!element
   this.visible.emit(this.trueelement)
  }

}
