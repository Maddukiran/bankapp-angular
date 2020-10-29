import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  users;
  constructor() { 

  }

  ngOnInit(): void {
    this.users  = JSON.parse(localStorage.getItem("USERS")) || [];
  }

  login(){
    let userObj=  {email: this.email , password: this.password};
    console.log(userObj);

    //Validate Login credentials
    let userExists =false;
    for(let obj of this.users){
      if (obj.email == this.email && obj.password == this.password) {
        delete obj.password;
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(obj));
        userExists = true;
        break;
      }
    }

    //Display message
    if(userExists){
      alert("Valid Login");
      window.location.reload();
    }
    else{ 
      alert("Invalid Login Credentials");
    }


  }

}
