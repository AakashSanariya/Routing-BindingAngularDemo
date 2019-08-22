import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{

  constructor(private authService: AuthService, private route: Router){}

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(localStorage.getItem('loginName')){
      return this.authService.login();
    }
    else{
      alert("Please Login First");
      this.route.navigateByUrl('/login');
      return false;
    }
  }

}
