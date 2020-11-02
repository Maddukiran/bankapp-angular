import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styles: [
  ]
})
export class ViewTransactionsComponent implements OnInit {

  transactions;

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.loadMyTransactions();
  }

  loadMyTransactions(){
    this.transactions = this.transactionService.getAllTransactions();
    
  }

}
