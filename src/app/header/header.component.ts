import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  loggedInUser;
  constructor() { }

  // Before login, loggedInUser = null
  // After login, loggedInUser = { id: 1, name:"Naresh"}
  ngOnInit(): void {

    let user = localStorage.getItem("LOGGED_IN_USER");
    this.loggedInUser = user != null ? JSON.parse(user): null;
    console.log("LoggedInUser", this.loggedInUser);
  }

  logout(){
    localStorage.removeItem("LOGGED_IN_USER");
  }
}
