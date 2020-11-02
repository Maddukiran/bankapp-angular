import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styles: [
  ]
})
export class TransactionSummaryComponent implements OnInit {

  //@Output


  @Input()
  accountNo;

  transactionList;

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(){
    //this.transactionList =  this.transactionService.getAccountTransaction(this.accountNo);
    this.transactionList =  this.transactionService.getRecentTransactions(this.accountNo);
  }

}
