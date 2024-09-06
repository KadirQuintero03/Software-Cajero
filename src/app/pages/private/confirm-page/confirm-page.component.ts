import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css'],
})
export class ConfirmPageComponent implements OnInit {
  constructor(private moneyService: MoneyService) {}
  _money!: number;

  ngOnInit(): void {
    this.moneyService.moneyValue$.subscribe((value) => {
      this._money = value;
    });
  }

  @Output() changeState = new EventEmitter<boolean>();

  test() {
    alert();
  }

  close() {
    this.changeState.emit(false);
  }
}
