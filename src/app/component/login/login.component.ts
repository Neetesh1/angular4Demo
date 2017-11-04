import { Component, OnInit } from '@angular/core';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login = UserLoginComponent;
  constructor() { }

  ngOnInit() {
  }

  public userLogin(){
    this.login = UserLoginComponent;
  }
  public adminLogin(){
    this.login = AdminLoginComponent;
  }
}
