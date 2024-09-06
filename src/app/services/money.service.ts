import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private moneyValue = new BehaviorSubject<number>(0);
  moneyValue$ = this.moneyValue.asObservable();

  setMoneyValue(value: number) {
    this.moneyValue.next(value);
  }

  constructor() { }
}
