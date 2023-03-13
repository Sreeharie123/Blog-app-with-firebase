import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  feturedPost:any
  lettestPost:any
  constructor(private postService:PostsService){}
ngOnInit(): void {

  this.postService.loadFeatured().subscribe((value)=>{
    this.feturedPost=value
    console.log(value)
   })

  this.postService.loadLatest().subscribe((value)=>{
   this.lettestPost=value
  })
}
 

}
