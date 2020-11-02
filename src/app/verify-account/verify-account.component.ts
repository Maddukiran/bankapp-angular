import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styles: [
  ]
})
export class VerifyAccountComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  accounts;

  ngOnInit(): void {
    this.accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
  }


  approve(account, index){
    console.log("Going to approve", account);
    
    let cfm = confirm("Do you want to activate Account ");
    if(cfm){
      account.status = "ACTIVE";
      this.accounts[index] = account;
      localStorage.setItem("ACCOUNTS", JSON.stringify(this.accounts) );
      this.toastr.success("Account Activated Succcessfully");
      }
    

    
  }

  
  disableAccount(account, index){
    console.log("Going to approve", account);
    account.status = "INACTIVE";
    this.accounts[index] = account;
    localStorage.setItem("ACCOUNTS", JSON.stringify(this.accounts) );
    
  }




}
