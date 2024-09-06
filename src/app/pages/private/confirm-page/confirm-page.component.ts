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
    this.timing = 60;  // Reinicia el contador a 60 segundos
    if (this.nequiKey) {
      this.dinamicKey = this.generateDinamicKey();
    }
    if (this.bancoKey) {
      this.dinamicKey = this.staticKey;
    }
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
      this.dinamicKey = this.generateDinamicKey();
      this.startCountdown();
    }

    if (this.bancoKey) {
      this.dinamicKey = this.staticKey;
    }
  }

  @Output() changeState = new EventEmitter<boolean>();

  confirmPayment(){
    if(this.inputKey !== this.dinamicKey){
      return alert("Clave incorrecta, pruebe otra vez")
    } else {
      this.receiptPage = true
    }
  }

  close() {
    this.changeState.emit(false);
  }
}
