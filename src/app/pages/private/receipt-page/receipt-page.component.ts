import { Component } from '@angular/core';
import { User1, User2 } from 'src/app/interfaces/User';
import { MoneyService } from 'src/app/services/money.service';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-receipt-page',
  templateUrl: './receipt-page.component.html',
  styleUrls: ['./receipt-page.component.css'],
})
export class ReceiptPageComponent {
  user1: User1 = new User1();
  user2: User2 = new User2();

  receiptNequi: boolean = false;
  receiptBanco: boolean = false;

  receipt: string = '';
  bank: string = '';
  accountNumber: string = '';
  typeOperation: string = 'retiro';
  date: string = '';
  time: string = '';
  TicketsDelivered = '';
  totalDelivered: number = 0;

  constructor(
    private stateService: StateServiceService,
    private moneyService: MoneyService
  ) {}

  ngOnInit(): void {
    this.stateService.nequiState$.subscribe((state) => {
      this.receiptNequi = state;
    });

    this.stateService.bancoState$.subscribe((state) => {
      this.receiptBanco = state;
    });

    this.moneyService.moneyValue$.subscribe((value) => {
      this.totalDelivered = value;
    });

    if (this.receiptNequi) {
      this.receipt = this.user1._typeAccount;
      this.bank = this.user1._typeAccount;
      this.accountNumber = this.user1._phoneNumber;
    }

    if (this.receiptBanco) {
      this.receipt = this.user2._typeAccount1;
      this.bank = this.user2._typeAccount1;
      this.accountNumber = this.user2._phoneNumber1;
    }

    const now = new Date();
    this.date = now.toLocaleDateString();
    this.time = now.toLocaleTimeString();
  }
}
