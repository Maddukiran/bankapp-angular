import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-payees',
  templateUrl: './view-payees.component.html',
  styles: [
  ]
})
export class ViewPayeesComponent implements OnInit {

  payeeList;

  constructor() { }

  ngOnInit(): void {
    this.loadMyPayees();
  }

  loadMyPayees(){
    this.payeeList = JSON.parse(localStorage.getItem("PAYEES")) || [];

  }

  removePayee(payeeObj,index){
    console.log("delete payee ", payeeObj);

    let cfm = confirm("Do you want to delete payee ?");
    if(cfm){
      //Delete the record in the given index
      this.payeeList.splice(index,1);

      localStorage.setItem("PAYEES", JSON.stringify(this.payeeList));

      //Refresh Payees
      this.loadMyPayees();      
    }

  }
}
