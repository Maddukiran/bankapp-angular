import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styles: [],
})
export class WithdrawComponent implements OnInit {
  account;

  accountNo;

  comments;
  amount;

  transactions;

  loggedInUser;
  constructor(private router:Router, private authService:AuthService, private accountService:AccountService, private route:ActivatedRoute, private toastr:ToastrService) {
    this.route.parent.params.subscribe(params=>{
      this.accountNo =  params["accountNo"];
    });
  }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.transactions = JSON.parse(localStorage.getItem('TRANSACTIONS')) || [];
    this.loadMyAccounts();
  }

  loadMyAccounts() {
    //let accounts = JSON.parse(localStorage.getItem('ACCOUNTS')) || [];
    //let myAccounts = accounts.filter(obj=>obj.userId == this.loggedInUser.id ); 
    //this.accounts = myAccounts;   
    this.account = this.accountService.findAccount(this.accountNo); 
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

    this.toastr.success('Successfully Withdrawn amount');

    let transactionType= "CREDIT";
    this.accountService.updateBalance(this.accountNo, transactionType, this.amount);
    this.router.navigate(["view-account/" + this.accountNo]);
  }
}
