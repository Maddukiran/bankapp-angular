import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles: [
  ]
})
export class CreateAccountComponent implements OnInit {

  loggedInUser;
  constructor() { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.LOGGED_IN_USER);
  }

  accountType:string;

  createAccount(){
    console.log("AccountType" , this.accountType);
    let formData = { accountNo: 1 , userId: this.loggedInUser.id , accountType: this.accountType, balance: 0 , status:"INACTIVE"};
    console.log(formData);

    let accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    accounts.push(formData);
    localStorage.setItem("ACCOUNTS", JSON.stringify(accounts));
    alert("Account created successfully");
  }
}
