import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private authService:AuthService) { }

  getAllAccounts(){
    let accounts:any = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    return accounts;
  }

  getMyAccounts(){
    let loggedInUserId = this.authService.getLoggedInUserId();
    let accounts:any = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    let myAccounts = accounts.filter(obj=>obj.userId == loggedInUserId ); 
    return myAccounts;
  }

  findAccount(accountId){
    let accounts:any = this.getAllAccounts();
    let account = accounts.find(obj=>obj.accountNo == accountId);
    return account;
  }

  createAccount(accountObj){
    let accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    accounts.push(accountObj);
    localStorage.setItem("ACCOUNTS", JSON.stringify(accounts));
  }

  updateBalance(accountNo, transactionType, amount){

    
    let accounts = this.getAllAccounts();
    let selectedAccount = accounts.find(obj=>obj.accountNo == accountNo);
    let index = accounts.findIndex(obj=>obj.accountNo == accountNo);
    console.log(selectedAccount);
    if(transactionType == "DEBIT"){
      selectedAccount.balance= selectedAccount.balance + amount;
    }
    else if (transactionType == "CREDIT"){
      selectedAccount.balance= selectedAccount.balance - amount;
    }
    
    //Update account with latest balance
    accounts[index] = selectedAccount;
    localStorage.setItem("ACCOUNTS", JSON.stringify(accounts));
  }

}
