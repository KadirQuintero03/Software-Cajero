import { Component } from '@angular/core';
import { User1 } from 'src/app/interfaces/User';
import { User2 } from 'src/app/interfaces/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  user1: User1 = new User1();
  user2: User2 = new User2();

  //Almacenan el valor de los input
  phoneNumber: string = '';
  password: string = '';

  //Manejan el estado de las vistas dash y login
  login: boolean = true;
  dashboard: boolean = false;

  loggin() {
    if (!this.phoneNumber || !this.password) {
      return alert('No puede dejar campos vacios');
    }

    if (this.phoneNumber == this.user1._phoneNumber) {
      this.phoneNumber = '0' + this.phoneNumber;
      if (
        this.phoneNumber == '03012110285' &&
        this.password == this.user1._password
      ) {
        this.login = false;
        return (this.dashboard = true);
      } else {
        this.phoneNumber = '';
        this.password = '';
        return alert('Error al acceder a su cuenta de nequi');
      }
    }

    if (this.phoneNumber == this.user2._phoneNumber1) {
      this.phoneNumber = '1' + this.phoneNumber;
      if (
        this.phoneNumber == '13205555181' &&
        this.password == this.user2._password1
      ) {
        this.login = false;
        return (this.dashboard = true);
      } else {
        this.phoneNumber = '';
        this.password = '';
        return alert('Error al acceder a su cuenta de bancolombia');
      }
    }

    if (
      (this.phoneNumber != this.user1._phoneNumber &&
        this.password != this.user1._password) ||
      (this.phoneNumber != this.user2._phoneNumber1 &&
        this.password != this.user2._password1)
    ) {
      alert('La cuenta no existe');
    }
  }
}
