import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  login: boolean = true;
  dashboard: boolean = false;

  loggin(){
    this.login = false;
    this.dashboard = true;
  }
}
