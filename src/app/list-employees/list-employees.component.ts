import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: [
  ]
})
export class ListEmployeesComponent implements OnInit {

 
  users;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    //let data:any  = JSON.parse(localStorage.getItem("USERS")) || [];
    //this.users = data.filter(obj=>obj.role=='ADMIN');
    this.users = this.userService.getEmployees();

  }
 
 

}
