import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

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
  constructor(private authService:AuthService, private userService:UserService) { 

  }

  ngOnInit(): void {
    this.users  = this.userService.getAllUsers();
  }

  login(){
    let userObj=  {email: this.email , password: this.password};
    console.log(userObj);

    //Validate Login credentials
    let userExists =false;
    for(let obj of this.users){
      if (obj.email == this.email && obj.password == this.password) {
        delete obj.password;
        this.authService.storeLoginDetails(obj);
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
