import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private moneyValue = new BehaviorSubject<boolean>(false);
  moneyValue$ = this.moneyValue.asObservable();

  setMoneyValue(value: boolean) {
    this.moneyValue.next(value);
  }

  constructor() { }
}
