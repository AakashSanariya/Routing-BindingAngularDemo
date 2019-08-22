import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header-componenets',
  templateUrl: './header-componenets.component.html',
  styleUrls: ['./header-componenets.component.css']
})
export class HeaderComponenetsComponent implements OnInit {

  constructor(public route: Router, public AuthService: AuthService) { }
  logout(){
    this.AuthService.logout();
  }

  logoutDisplaybutton(){
    let loginSetName = localStorage.getItem('loginName');
    let loginSetPassword = localStorage.getItem('loginPassword');
    if(loginSetName === "Admin" && loginSetPassword === "Admin@123"){
      return true;
    }
    else{
      return false;
    }
  }
  ngOnInit() {
  }

}
