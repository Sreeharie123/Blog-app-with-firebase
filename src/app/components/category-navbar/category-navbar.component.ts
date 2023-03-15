import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit{

  constructor(private categoryService:CategoriesService){}

  categoryArray:any



ngOnInit(): void {
  this.categoryService.loadData().subscribe((value)=>{

     this.categoryArray=value
  })

}

trueelement:boolean=true

  @Output()visible=new EventEmitter()


  additem(element:boolean){
  this.trueelement=!element
   this.visible.emit(this.trueelement)
  }


}
