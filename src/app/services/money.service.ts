import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private moneyValue = new BehaviorSubject<number>(0);
  private cantbillete = new BehaviorSubject<{ [key: number]: number }>({});
  moneyValue$ = this.moneyValue.asObservable();
  cantbillete$ = this.cantbillete.asObservable();

  setMoneyValue(value: number) {
    this.moneyValue.next(value);
  }

  setCantBilete(value: { [key: number]: number }) {
    this.cantbillete.next(value);
  }

  constructor() { }
}
