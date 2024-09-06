import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MoneyService } from 'src/app/services/money.service';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css'],
})
export class ConfirmPageComponent implements OnInit {
  _money!: number;
  nequiKey: boolean = false;
  bancoKey: boolean = false;
  dinamicKey: number = 0;
  staticKey: number = 391522;
  timing: number = 60;
  countdown!: Subscription;
  inputKey!: number;
  receiptPage: boolean = false;
  confirmPage: boolean = true;
  tryValidate: number = 0;
  billete: number[] = [10000, 20000, 50000, 100000];
  guardarBillete: number[] = [];
  cantidadBillete: { [key: number]: number } = {};
  validateKey: boolean = false;

  constructor(
    private moneyService: MoneyService,
    private stateService: StateServiceService
  ) {}

  generateDinamicKey(): number {
    return Math.floor(Math.random() * 900000) + 100000;
  }

  startCountdown() {
    this.countdown = interval(1000).subscribe(() => {
      if (this.timing > 0) {
        this.timing--;
      } else {
        this.resetCountdown();
      }
    });
  }

  resetCountdown() {
    this.timing = 60; // Reinicia el contador a 60 segundos
    if (this.nequiKey) {
      this.dinamicKey = this.generateDinamicKey();
    }
    if (this.bancoKey) {
      this.dinamicKey = this.staticKey;
    }
  }

  logiCajero() {
    let suma = 0;

    for (let i = 0; suma < this._money; i++) {
      for (let index = i % 4; index < 4 && suma < this._money; index++) {
        if (suma + this.billete[index] <= this._money) {
          suma += this.billete[index];
          this.guardarBillete.push(this.billete[index]);
        }
      }
    }

  this.guardarBillete.forEach((billete) => {
    if (this.cantidadBillete[billete]) {
      this.cantidadBillete[billete]++;
    } else {
      this.cantidadBillete[billete] = 1;
    }
  });
  }

  ngOnInit(): void {
    this.moneyService.moneyValue$.subscribe((value) => {
      this._money = value;
    });

    this.stateService.nequiState$.subscribe((state) => {
      this.nequiKey = state;
    });

    this.stateService.bancoState$.subscribe((state) => {
      this.bancoKey = state;
    });

    if (this.nequiKey) {
      this.validateKey = true;
      this.dinamicKey = this.generateDinamicKey();
      this.startCountdown();
    }

    if (this.bancoKey) {
      this.dinamicKey = this.staticKey;
    }
  }

  @Output() changeState = new EventEmitter<boolean>();

  confirmPayment() {
    this.logiCajero();
    if (this.inputKey !== this.dinamicKey) {
      this.tryValidate++;
      alert('Clave incorrecta lleva ' + this.tryValidate + ' intento fallido.');
      if (this.tryValidate == 3) {
        window.location.reload();
      }
    } else {
      this.moneyService.setCantBilete(this.cantidadBillete);
      this.confirmPage = false;
      this.receiptPage = true;
    }
  }

  close() {
    this.changeState.emit(false);
  }
}
