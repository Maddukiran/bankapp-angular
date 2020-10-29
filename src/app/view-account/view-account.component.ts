import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styles: [
  ]
})
export class ViewAccountComponent implements OnInit {

  accounts;
  constructor() { }

  ngOnInit(): void {
    this.loadMyAccounts();
  }

  loadMyAccounts(){
    this.accounts = JSON.parse(localStorage.getItem("ACCOUNTS")) || [];
  }

}
