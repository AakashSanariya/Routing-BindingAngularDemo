import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router, public authService: AuthService) { }
  name: string;
  password: string;
  loginDetails(name, password){
    this.name = name;
    this.password = password;
    localStorage.setItem('loginName', this.name);
    localStorage.setItem('loginPassword', this.password);
    let loginSuccess = this.authService.login();
    if(loginSuccess === true){
      this.route.navigateByUrl('/');
    }
    else{
      alert("User Name And Password Are Not Match");
      this.route.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }

}
