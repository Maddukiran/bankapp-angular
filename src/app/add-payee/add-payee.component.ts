import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {

    this.loggedInUser = this.authService.getLoggedInUser();
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

    this.router.navigate(['view-payees']);
  }



}
