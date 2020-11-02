import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styles: [
  ]
})
export class ViewAccountComponent implements OnInit {

  loggedInUser;
  accountId:number;
  account;

  constructor(private route: ActivatedRoute,private authService:AuthService, private accountService:AccountService) {

    this.route.params.subscribe(params=>{
      //console.log(params);
      this.accountId = params["accountNo"];
      console.log(this.accountId);
    });

   }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.loadAccountDetails(this.accountId);
  }

  loadAccountDetails(accountId){
    this.account = this.accountService.findAccount(accountId);
    console.log(this.account);
  }

}
