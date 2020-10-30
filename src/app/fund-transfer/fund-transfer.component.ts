import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styles: [
  ]
})
export class FundTransferComponent implements OnInit {

  accounts;
  payeeList;

  accountNo;
  toAccountNo;

  comments;
  amount;

  transactions;

  constructor(private router:Router, private authService:AuthService, private accountService:AccountService) {}

  ngOnInit(): void {
    this.transactions = JSON.parse(localStorage.getItem('TRANSACTIONS')) || [];
    this.loadMyAccounts();
    this.loadMyPayees();
  }

  loadMyAccounts() {
    //let accounts = JSON.parse(localStorage.getItem('ACCOUNTS')) || [];
    //this.accounts = accounts;
    this.accounts = this.accountService.getMyAccounts();
  }

  loadMyPayees(){
    this.payeeList = JSON.parse(localStorage.getItem("PAYEES")) || [];
  }

  getTransactionNo(){
    let transactionNo  = Math.floor(100000 + Math.random() * 900000); //Generate 4 digit number
    return transactionNo;
  }

  fundTransfer() {
    
    let transaction1 = {
      transactionId: this.getTransactionNo(),
      accountNo: this.accountNo,
      amount: this.amount,
      comments: this.comments,
      transactionType : "CREDIT",
      status: "SUCCESS",
      transactionDate: new Date().toJSON()
    };

    let transaction2 = {
      transactionId: this.getTransactionNo(),
      accountNo: this.toAccountNo,
      amount: this.amount,
      comments: this.comments,
      transactionType : "DEBIT",
      status: "SUCCESS",
      transactionDate: new Date().toJSON()
    };


    //Store transaction data to localStorage
    this.transactions.push(transaction1);
    this.transactions.push(transaction2);
    localStorage.setItem('TRANSACTIONS', JSON.stringify(this.transactions));


    //UpdateBalance
    this.updateBalance(this.accountNo, "CREDIT", this.amount);
    this.updateBalance(this.toAccountNo, "DEBIT", this.amount);
   
    
    alert('Successfully Fund Transfered');

  }

  updateBalance(accountNo,transactionType, amount){

     //Update balance
     let selectedAccount = this.accounts.find(
      (obj) => obj.accountNo == accountNo
    );
    let index = this.accounts.findIndex(
      (obj) => obj.accountNo == accountNo
    );
    console.log(selectedAccount);
    if(transactionType == "CREDIT"){
      selectedAccount.balance = selectedAccount.balance - amount;
    }
    else if (transactionType =="DEBIT"){
      selectedAccount.balance = selectedAccount.balance + amount;
    }

    //Update account with latest balance
    this.accounts[index] = selectedAccount;
    localStorage.setItem('ACCOUNTS', JSON.stringify(this.accounts));

    this.router.navigate(["view-account"]);
  }

  

}
