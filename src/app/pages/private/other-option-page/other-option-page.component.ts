import { Component, EventEmitter, Output } from '@angular/core';
import { User1, User2 } from 'src/app/interfaces/User';
import { MoneyService } from 'src/app/services/money.service';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-other-option-page',
  templateUrl: './other-option-page.component.html',
  styleUrls: ['./other-option-page.component.css'],
})
export class OtherOptionPageComponent {
  confirmpage: boolean = false;
  money!: number;
  logNequi: boolean = false;
  logBanco: boolean = false;
  user1: User1 = new User1();
  user2: User2 = new User2();

  constructor(private moneyService: MoneyService, private stateService: StateServiceService) {}

  ngOnInit(): void {
    this.stateService.nequiState$.subscribe((state) => {
      this.logNequi = state;
    });

    this.stateService.bancoState$.subscribe((state) => {
      this.logBanco = state;
    });
  }

  confirm(value: boolean) {
    if (this.money == 0) {
      return alert('valor no permitido.');
    }

    if(this.logNequi){
      if(this.money > this.user1._balance){
        return alert("Error, no puede retirar mas de lo que tiene")
      }

      if(this.logBanco){
        if(this.money > this.user2._balance1){
          return alert("Error, no puede retirar mas de lo que tiene")
        }
      }
    }

    if (0 == this.money % 10000) {
      this.moneyService.setMoneyValue(this.money);
      this.confirmpage = value;
    } else {
      alert('Solo se aceptan valores que sean multiplos de 10000.');
    }
  }

  @Output() changeState = new EventEmitter<boolean>();

  close() {
    this.changeState.emit(false);
  }
}
