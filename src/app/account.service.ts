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

  createAccount(accountObj){
    let accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
    accounts.push(accountObj);
    localStorage.setItem("ACCOUNTS", JSON.stringify(accounts));
  }

}
