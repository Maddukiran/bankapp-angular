import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styles: [
  ]
})
export class DepositComponent implements OnInit {

  accounts;

  accountNo;

  comments;
  amount;

  transactions;

  
  constructor() { }

  ngOnInit(): void {
    this.transactions = JSON.parse(localStorage.getItem("TRANSACTIONS")) || [];
    this.loadMyAccounts();
  }

  loadMyAccounts(){
    let accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    this.accounts = accounts;
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

    //Update balance
    let selectedAccount = this.accounts.find(obj=>obj.accountNo == this.accountNo);
    let index = this.accounts.findIndex(obj=>obj.accountNo == this.accountNo);
    console.log(selectedAccount);
    selectedAccount.balance= selectedAccount.balance + this.amount;
    
    //Update account with latest balance
    this.accounts[index] = selectedAccount;
    localStorage.setItem("ACCOUNTS", JSON.stringify(this.accounts));

  }



}
