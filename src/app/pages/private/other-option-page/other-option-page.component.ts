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
    if(0 == this.money % 10000){
      this.moneyService.setMoneyValue(this.money)
      this.confirmpage = value;
    } else {
      alert("Solo se aceptan valores que sean multiplos de 10000.")
    }
  }

  @Output() changeState = new EventEmitter<boolean>();

  close(){
    this.changeState.emit(false);
  }
}
