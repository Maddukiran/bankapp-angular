import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styles: [
  ]
})
export class AddPayeeComponent implements OnInit {

  loggedInUser;

  payeeList;

  shortName:string;
  name:string;
  accountNo:number;
  ifsc:string;

  constructor() { }

  ngOnInit(): void {

    this.loggedInUser = JSON.parse( localStorage.getItem("LOGGED_IN_USER"));
    this.payeeList = JSON.parse(localStorage.getItem("PAYEES")) || [];
  }


  addPayee(){
    let payee = { shortName: this.shortName,  name : this.name, accountNo: this.accountNo , ifsc: this.ifsc , createdOn: new Date().toJSON(),
    createdBy: this.loggedInUser.id };
    console.log(payee);


    //store in localstorage
    this.payeeList.push(payee);

    localStorage.setItem("PAYEES", JSON.stringify(this.payeeList));

    alert("Successfully Payee added");
  }



}
