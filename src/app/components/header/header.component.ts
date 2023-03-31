import { Component, EventEmitter, HostListener, Output } from '@angular/core';

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


  isTrue:boolean=false

  open(booleanData:boolean){
    this.isTrue=!booleanData
  }

  buttonClick(data:boolean){
    this.isTrue=!data
  }



darkNav:boolean=false

@HostListener('document:scroll')

onScroll(){
if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){

  this.darkNav=true
}else{
  this.darkNav=false
}
}


}
