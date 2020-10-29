import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  name:string;
  email:string;
  password:string;

  users;
  constructor() { 

  }

  ngOnInit(): void {
    this.users  = JSON.parse(localStorage.getItem("USERS")) || [];
  }

  register(){
    let userObj=  { name: this.name , email: this.email , password: this.password};
    console.log(userObj);

    //Validate Email already exists
    let emailAlreadyExists =false;
    for(let obj of this.users){
      if (obj.email == this.email) {
        emailAlreadyExists = true;
        break;
      }
    }

    //Display message
    if(emailAlreadyExists){
      alert("Email already registered");
    }
    else{ 
      
      //Store user in localStorage
      this.users.push(userObj);
      localStorage.setItem("USERS", JSON.stringify(this.users));

      alert("Successfully Registered");
    }


  }


}
