import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs:AngularFirestore,private tostr:ToastrService) { }

  addSubs(subData:any,form:any){
    this.afs.collection('subscribers').add(subData).then(()=>{
        this.tostr.success("Subscribed Successfully")
        form.reset()
    })

  }

  checkSubs(subEmail:string){
    return this.afs.collection('subscribers',ref=> ref.where('email', '==',subEmail)).get()

  }
}
