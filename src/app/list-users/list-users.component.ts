import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [
  ]
})
export class ListUsersComponent implements OnInit {

  users;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    //let data:any  = JSON.parse(localStorage.getItem("USERS")) || [];
    //this.users = data.filter(obj=>obj.role=='USER');
    this.users = this.userService.getCustomers();
  }

}
