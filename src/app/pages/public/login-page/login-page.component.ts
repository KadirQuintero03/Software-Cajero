import { Component } from '@angular/core';
import { User1, User2 } from 'src/app/interfaces/User';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private stateService: StateServiceService) {}

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

    if (this.phoneNumber == '3212110285') {
      this.phoneNumber = '0' + this.phoneNumber;
      if (
        this.phoneNumber == this.user1._phoneNumber &&
        this.password == this.user1._password
      ) {
        this.stateService.setNequiState(true);
        this.stateService.setBancoState(false);
        this.login = false;
        this.dashboard = true;
        return;
      } else {
        this.phoneNumber = '';
        this.password = '';
        return alert('Error al acceder a su cuenta de nequi');
      }
    }

    if (
      this.phoneNumber == this.user2._phoneNumber1 &&
      this.password == this.user2._password1
    ) {
      if (
        this.phoneNumber == '13115555181' &&
        this.password == this.user2._password1
      ) {
        this.stateService.setNequiState(false);
        this.stateService.setBancoState(true);
        this.login = false;
        this.dashboard = true;
        return;
      } else {
        this.phoneNumber = '';
        this.password = '';
        alert('Error al acceder a su cuenta de bancolombia');
        return;
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
