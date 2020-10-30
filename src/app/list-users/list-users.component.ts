import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [
  ]
})
export class ListUsersComponent implements OnInit {

  users;

  constructor() { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    let data:any  = JSON.parse(localStorage.getItem("USERS")) || [];
    this.users = data.filter(obj=>obj.role=='USER');
  }

}
