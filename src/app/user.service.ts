import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getAllUsers(){
    let users = JSON.parse(localStorage.getItem("USERS")) || [];
    return users;
  }

  register(userObj){
    let users = this.getAllUsers();
    users.push(userObj);
    localStorage.setItem("USERS", JSON.stringify(users));

  }

  getCustomers(){
    let data:any  = JSON.parse(localStorage.getItem("USERS")) || [];
    let users = data.filter(obj=>obj.role=='USER');
    return users;
  }

  
  getEmployees(){
    let data:any  = JSON.parse(localStorage.getItem("USERS")) || [];
    let users = data.filter(obj=>obj.role=='ADMIN');
    return users;
  }
}
