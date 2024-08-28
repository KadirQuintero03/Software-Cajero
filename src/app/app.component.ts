import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cajero';

  //Controla el estado de la vista de inicio
  home: boolean = true;
  //Controla el estado de la vista Login
  loginAcess: boolean = false;
  //Controla el estado de la vista con las funciones
  dashboard: boolean = false;

  user: string = '';
  password: string = '';

  balance: number = 2000000;
  value: number = 0;

  //Cambia el estado del login a true para que se visualice
  //y cambia el estado del home para que se oculte
  access(item: boolean) {
    this.home = false;
    this.loginAcess = item;
  }

  login() {
    if (this.user == 'kadir' && this.password == "1234") {
      this.loginAcess = false;
      this.dashboard = true;
    } else {
      alert('Acceso denegado');
    }
  }

  pay(){
    this.balance = this.balance + this.value;
  }

  remove(){
    this.balance = this.balance - this.value;
  }

  constructor() {}
}
