import { Component, EventEmitter, Output } from '@angular/core';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-other-option-page',
  templateUrl: './other-option-page.component.html',
  styleUrls: ['./other-option-page.component.css']
})
export class OtherOptionPageComponent {
  confirmpage: boolean = false;
  money!: number;

  constructor(private moneyService: MoneyService){}

  confirm(value: boolean){
    this.moneyService.setMoneyValue(this.money)
    this.confirmpage = value;
  }

  @Output() changeState = new EventEmitter<boolean>();

  close(){
    this.changeState.emit(false);
  }
}
