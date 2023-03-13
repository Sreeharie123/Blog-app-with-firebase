import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  feturedPost:any
  constructor(private postService:PostsService){

     this.postService.loadFeatured().subscribe((value)=>{
      this.feturedPost=value
      console.log(value)
     })
  }



}
