import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styles: [
  ]
})
export class VerifyAccountComponent implements OnInit {

  constructor() { }

  accounts;

  ngOnInit(): void {
    this.accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
  }


  approve(account, index){
    console.log("Going to approve", account);
    account.status = "ACTIVE";
    this.accounts[index] = account;
    localStorage.setItem("ACCOUNTS", JSON.stringify(this.accounts) );
    
  }

  
  disableAccount(account, index){
    console.log("Going to approve", account);
    account.status = "INACTIVE";
    this.accounts[index] = account;
    localStorage.setItem("ACCOUNTS", JSON.stringify(this.accounts) );
    
  }




}
