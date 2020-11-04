import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styles: [
  ]
})
export class DepositComponent implements OnInit {

  account;

  accountNo;

  comments;
  amount;

  transactions;

  loggedInUser;

  
  constructor(private route:ActivatedRoute, private router:Router, private authService: AuthService, private accountService:AccountService, private toastr:ToastrService) { 
    this.route.parent.params.subscribe(params=>{
      this.accountNo =  params["accountNo"];
    });
  }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.transactions = JSON.parse(localStorage.getItem("TRANSACTIONS")) || [];
    this.loadMyAccounts();
  }

  loadMyAccounts(){
    //let accounts:any = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    //let myAccounts = accounts.filter(obj=>obj.userId == this.loggedInUser.id ); 
    //this.accounts = myAccounts;
    this.account  = this.accountService.findAccount(this.accountNo);
  }

  deposit(){
    let transaction = { 
      "accountNo": this.accountNo, amount: this.amount, comments: this.comments };
      

    //Add TransactionNo , Transaction Type, TransactionDate,status
    transaction["transactionType"] = "DEBIT";
    transaction["transactionDate"] = new Date().toJSON();
    transaction["status"] = "SUCCESS";

    let generatedTransactionNo =  Math.floor(100000 + Math.random() * 900000);//Generate 4 digit number
    transaction["transactionId"] = generatedTransactionNo;
    console.log(transaction);

    //Store transaction data to localStorage
    this.transactions.push(transaction);
    localStorage.setItem("TRANSACTIONS", JSON.stringify(this.transactions));

    

    //Update balance
    let transactionType = "DEBIT";
    this.accountService.updateBalance(this.accountNo, transactionType, this.amount);
    this.toastr.success("Successfully Deposited amount");

    this.router.navigate(["view-account/" + this.accountNo]);
  }



}
