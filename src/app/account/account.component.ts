import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [
  ]
})
export class AccountComponent implements OnInit {

  accountNo;
  account;

  constructor(private route:ActivatedRoute,private accountService:AccountService) {
    this.route.params.subscribe(params=>{
      this.accountNo = params['accountNo'];
    })
   }

  ngOnInit(): void {
    this.loadMyAccount();
  }

  loadMyAccount(){
    this.account = this.accountService.findAccount(this.accountNo);
  }

}
