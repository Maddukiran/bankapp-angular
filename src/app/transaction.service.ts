import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getAllTransactions(){
    let transactions = JSON.parse(localStorage.getItem("TRANSACTIONS")) || [];
    return transactions;
  }

  getAccountTransaction(accountNo){
    let transactions:any = this.getAllTransactions();
    let accountTransactions = transactions.filter(obj=>obj.accountNo == accountNo);
    return accountTransactions;
  }

  getRecentTransactions(accountNo){
    let transactions:any = this.getAccountTransaction(accountNo);
    let noOfTransactions = 5;
    let max =  Math.max( transactions.length - noOfTransactions, 1);
    let filteredData = transactions.slice(max);
    console.log(filteredData);
    return filteredData; 
  }


}
