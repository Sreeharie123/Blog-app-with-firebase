import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { SinglePostsComponent } from './components/pages/single-posts/single-posts.component';
import { TermsAndConditionComponent } from './components/pages/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"category",component:SingleCategoryComponent},
  {path:"post",component:SinglePostsComponent},

  {path:"about",component:AboutUsComponent},
  {path:"term-condition",component:TermsAndConditionComponent},
  {path:"contact",component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

