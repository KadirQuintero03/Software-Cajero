import { Component, EventEmitter, Output } from '@angular/core';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-money-options-page',
  templateUrl: './money-options-page.component.html',
  styleUrls: ['./money-options-page.component.css']
})

export class MoneyOptionsPageComponent {
  constructor(private moneyService: MoneyService){}

  confirmpage: boolean = false;
  money!: number;

  accesconfirm(value: boolean){
    this.moneyService.setMoneyValue(this.money)
    this.confirmpage = value;
  }

  @Output() changeState = new EventEmitter<boolean>();

  close(){
    this.changeState.emit(false);
  }
}
