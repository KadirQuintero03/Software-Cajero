import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  private nequiState = new BehaviorSubject<boolean>(false);
  private bancoState = new BehaviorSubject<boolean>(false);
  nequiState$ = this.nequiState.asObservable();
  bancoState$ = this.bancoState.asObservable();

  setNequiState(value: boolean) {
    this.nequiState.next(value);
  }

  setBancoState(value: boolean) {
    this.bancoState.next(value);
  }

  constructor() { }
}
