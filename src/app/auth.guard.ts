import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user = localStorage.getItem("LOGGED_IN_USER");
    console.log("AuthGuard" , user);  
    if(user){
      console.log("User is LoggedIn", user);
    }
    else{
      console.log("User is not yet LoggedIn");
      //window.location.href="login";
      this.router.navigate(['login']);
    }
    

    return true;
  }
  
}
