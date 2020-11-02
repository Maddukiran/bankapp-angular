import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  
  constructor(private route:ActivatedRoute, private router:Router, private authService: AuthService, private accountService:AccountService) { 
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

    alert("Successfully Deposited amount");
/*
    //Update balance
    let selectedAccount = this.accounts.find(obj=>obj.accountNo == this.accountNo);
    let index = this.accounts.findIndex(obj=>obj.accountNo == this.accountNo);
    console.log(selectedAccount);
    selectedAccount.balance= selectedAccount.balance + this.amount;
    
    //Update account with latest balance
    this.accounts[index] = selectedAccount;
    localStorage.setItem("ACCOUNTS", JSON.stringify(this.accounts));
*/
    this.router.navigate(["view-account"]);
  }



}
