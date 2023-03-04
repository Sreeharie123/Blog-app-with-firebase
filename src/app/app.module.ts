import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryNavbarComponent } from './components/category-navbar/category-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { SinglePostsComponent } from './components/pages/single-posts/single-posts.component';
import { TermsAndConditionComponent } from './components/pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { CommentsFormComponent } from './components/comments/comments-form/comments-form.component';
import { CommentsListComponent } from './components/comments/comments-list/comments-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostsComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentsFormComponent,
    CommentsListComponent,
    AboutUsComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
