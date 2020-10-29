import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styles: [
  ]
})
export class ViewTransactionsComponent implements OnInit {

  transactions;

  constructor() { }

  ngOnInit(): void {
    this.loadMyTransactions();
  }

  loadMyTransactions(){
    this.transactions = JSON.parse(localStorage.getItem("TRANSACTIONS")) || [];
    
  }

}
