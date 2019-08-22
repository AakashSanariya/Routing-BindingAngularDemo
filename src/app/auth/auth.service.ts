import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {tap} from "rxjs/internal/operators/tap";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginName: string;
  loginPassword: string;
  login(){
    this.loginName = localStorage.getItem('loginName');
    this.loginPassword = localStorage.getItem('loginPassword');
    if(this.loginName === "Admin" && this.loginPassword === "Admin@123"){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('loginName');
    localStorage.removeItem('loginPassword');
    this.route.navigateByUrl('/login');
  }
  constructor(public route:Router) {  }
}
