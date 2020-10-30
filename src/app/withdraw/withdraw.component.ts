import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styles: [],
})
export class WithdrawComponent implements OnInit {
  accounts;

  accountNo;

  comments;
  amount;

  transactions;

  loggedInUser;
  constructor(private router:Router, private authService:AuthService, private accountService:AccountService) {}

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.transactions = JSON.parse(localStorage.getItem('TRANSACTIONS')) || [];
    this.loadMyAccounts();
  }

  loadMyAccounts() {
    //let accounts = JSON.parse(localStorage.getItem('ACCOUNTS')) || [];
    //let myAccounts = accounts.filter(obj=>obj.userId == this.loggedInUser.id ); 
    //this.accounts = myAccounts;   
    this.accounts = this.accountService.getMyAccounts(); 
  }

  withdraw() {
    let transaction = {
      accountNo: this.accountNo,
      amount: this.amount,
      comments: this.comments,
    };

    //Add TransactionNo , Transaction Type, TransactionDate,status
    transaction['transactionType'] = 'CREDIT';
    transaction['transactionDate'] = new Date().toJSON();
    transaction['status'] = 'SUCCESS';

    let generatedTransactionNo = Math.floor(100000 + Math.random() * 900000); //Generate 4 digit number
    transaction['transactionId'] = generatedTransactionNo;
    console.log(transaction);

    //Store transaction data to localStorage
    this.transactions.push(transaction);
    localStorage.setItem('TRANSACTIONS', JSON.stringify(this.transactions));

    alert('Successfully Withdrawn amount');

    //Update balance
    let selectedAccount = this.accounts.find(
      (obj) => obj.accountNo == this.accountNo
    );
    let index = this.accounts.findIndex(
      (obj) => obj.accountNo == this.accountNo
    );
    console.log(selectedAccount);
    selectedAccount.balance = selectedAccount.balance - this.amount;

    //Update account with latest balance
    this.accounts[index] = selectedAccount;
    localStorage.setItem('ACCOUNTS', JSON.stringify(this.accounts));

    this.router.navigate(["view-account"]);
  }
}
