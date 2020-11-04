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

  filtedTransactions;

  //Databinding ( select )
  transactionTypeFilter:string = "ALL"; 

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.loadMyTransactions();
  }

  loadMyTransactions(){
    this.transactions = this.transactionService.getAllTransactions();
    this.doFilter();
  }

  getTransactions(){
    if( this.transactionTypeFilter  == "ALL"){
      return this.transactions;
    }
    else{
      return this.transactions.filter(obj=> obj.transactionType== this.transactionTypeFilter);
    }
  }

  doFilter(){
    if( this.transactionTypeFilter  == "ALL"){
      this.filtedTransactions= this.transactions;
    }
    else{
      this.filtedTransactions= this.transactions.filter(obj=> obj.transactionType== this.transactionTypeFilter);
    }
  }

}
