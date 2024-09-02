import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-money-options-page',
  templateUrl: './money-options-page.component.html',
  styleUrls: ['./money-options-page.component.css']
})
export class MoneyOptionsPageComponent {
  @Output() changeState = new EventEmitter<boolean>();

  close(){
    this.changeState.emit(false);
  }
}
