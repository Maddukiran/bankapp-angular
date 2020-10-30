import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  role:string;

  users;
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
    this.users  = JSON.parse(localStorage.getItem("USERS")) || [];
  }

  register(){
    let generateUserId =  Math.floor(100 + Math.random() * 900);//Generate 4 digit number

    let userObj=  { id: generateUserId, name: this.name , email: this.email , password: this.password, 
      role:this.role};
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
      this.router.navigate(['login']);


    }


  }


}
