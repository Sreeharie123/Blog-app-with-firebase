import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }

  loadFeatured() {
    return this.afs
      .collection('posts',ref=>ref.where('isFeatured','==',true).limit(4  ))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadLatest(){
    return this.afs
    .collection('posts',ref=>ref.orderBy ('createdAt'))
    .snapshotChanges()
    .pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );

  }

  loadCatergoryPosts(categoryId:string ){
    return this.afs
      .collection('posts',ref=>ref.where('category.categoryId','==',categoryId))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );

  }

  loadOnePost(postId:string){

   return this.afs.doc(`posts/${postId}`).valueChanges()

  }

  loadSimilar(categoryId:string){

    return this.afs
      .collection('posts',ref=>ref.where('category.categoryId','==',categoryId).limit(4))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  // countViews(postId:string){
  //   const viewsCount={
  //     views:firebase.default.firestore.FieldValue.increment(1)
  //   }

  //   this.afs.doc(`posts/${postId}`).update(viewsCount).then(()=>{
  //       console.log("Views count updated")
  //   })

  // }
}
