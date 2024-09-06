import { Component, EventEmitter, Output } from '@angular/core';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-money-options-page',
  templateUrl: './money-options-page.component.html',
  styleUrls: ['./money-options-page.component.css'],
})
export class MoneyOptionsPageComponent {
  constructor(private moneyService: MoneyService) {}

  confirmpage: boolean = false;
  otherOptionPage: boolean = false;
  money!: number;

  accesconfirm(value: boolean) {
    if (this.money == undefined) {
      return alert('Escoja alguna de las opciones');
    } else {
      if (this.money == 1) {
        this.otherOptionPage = value;
      }

      if (this.money !== undefined) {
        this.moneyService.setMoneyValue(this.money);
        this.confirmpage = value;
      }
    }
  }

  otherOption(value: boolean) {
    this.moneyService.setMoneyValue(this.money);
    this.otherOptionPage = value;
  }

  @Output() changeState = new EventEmitter<boolean>();

  close() {
    this.changeState.emit(false);
  }
}
