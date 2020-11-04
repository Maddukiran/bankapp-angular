import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  
  constructor(private route:Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      console.log("RoleGuard");

   // 1. Get LoggedIn User Details
    let user = localStorage.getItem("LOGGED_IN_USER");
    let loggedInUser = user? JSON.parse(user): null;
    console.log("AuthGuard" , user);  

    // 2. If LoggedIn, check the role
    if(loggedInUser){

      //2.1 If the role is "Admin" , allow to the page, else show message and block page navigation.

      if(loggedInUser.role=="ADMIN"){
        return true;
      }
      else{
        alert("This page is accessible only by admin");        
      }
      
    }
    else{
      console.log("User is not yet LoggedIn");
      //window.location.href="login";
      //this.router.navigate(['login']);
    }
    
      return false;
  }
  
}
