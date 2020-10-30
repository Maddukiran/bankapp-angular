import { Component, OnInit } from '@angular/core';
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
  accounts;
  constructor(private authService:AuthService, private accountService:AccountService) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.loadMyAccounts();
  }

  loadMyAccounts(){
   // let data:any =  JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    //this.accounts =  data.filter(obj=>obj.userId == this.loggedInUser.id);
    this.accounts = this.accountService.getMyAccounts();
  }

}
