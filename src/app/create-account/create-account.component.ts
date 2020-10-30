import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles: [
  ]
})
export class CreateAccountComponent implements OnInit {

  loggedInUser;
  constructor(private router:Router, private authService:AuthService, private accountService:AccountService) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  accountType:string;

  createAccount(){
    console.log("AccountType" , this.accountType);

    let generatedAccountNo =  Math.floor(100 + Math.random() * 900);//Generate 4 digit number
    console.log("GeneratedAccountNo", generatedAccountNo);

    let accountObj = { accountNo: generatedAccountNo , userId: this.loggedInUser.id , accountType: this.accountType, balance: 0 , status:"INACTIVE",
  kycStatus:"PENDING", createdBy: this.loggedInUser.id};
    console.log(accountObj);

    //let accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    //accounts.push(formData);
    //localStorage.setItem("ACCOUNTS", JSON.stringify(accounts));
    this.accountService.createAccount(accountObj);
    alert("Account created successfully");

    

    this.router.navigate(["view-account"]);
  }
}
