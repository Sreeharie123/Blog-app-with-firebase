import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.scss'],
})
export class SinglePostsComponent implements OnInit {
  postData: any;
  similarPost:any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((value: any) => {



      // this.postService.countViews(value.id);
      this.postService.loadOnePost(value.id).subscribe((post) => {
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId)
      });
    })


  }


  loadSimilarPost(categoryId:string){
    this.postService.loadSimilar(categoryId ).subscribe((value)=>{
        this.similarPost=value;
    })

  }
}
