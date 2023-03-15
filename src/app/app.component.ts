import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogApp';

   currenElement!:boolean;
  additem(element:boolean){
       this.currenElement=element
  }

  item(value:boolean){

     this.currenElement=value
  }
}
