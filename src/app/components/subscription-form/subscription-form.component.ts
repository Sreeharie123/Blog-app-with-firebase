import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Sub } from 'src/app/models/sub';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  istrue: boolean = false;
  issub:boolean=false;

  constructor(
    private subscribeService: SubscribersService,
    private tostr: ToastrService
  ) {}

  onSubmit(form: any) {
    const subData: Sub = {
      name: form.value.name,
      email: form.value.email,
    };

    this.subscribeService.checkSubs(subData.email).subscribe((value) => {
      if (value.empty) {
        this.subscribeService.addSubs(subData, form);
        this.issub=true
        this.istrue=false
      } else {
        this.tostr.warning('Email is allready subscribed');
        this.istrue = true;
      }
    });
  }

  ngOnInit(): void {}
}
