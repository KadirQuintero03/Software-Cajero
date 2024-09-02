import { Component, OnInit } from '@angular/core';
import { User1, User2 } from 'src/app/interfaces/User';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  moneyOption: boolean = false;

  user1: User1 = new User1();
  user2: User2 = new User2();

  nequiVisible: boolean = false;
  bancoVisible: boolean = false;

  name: string = '';
  lastname: string = '';
  balance: number = 0;
  typeAccount: string = "";

  constructor(private stateService: StateServiceService) {}

  ngOnInit(): void {
    this.stateService.nequiState$.subscribe((state) => {
      this.nequiVisible = state;
    });

    this.stateService.bancoState$.subscribe((state) => {
      this.bancoVisible = state;
    });

    if (this.nequiVisible) {
      this.name = this.user1._name;
      this.lastname = this.user1._lastname;
      this.balance = this.user1._balance;
      this.typeAccount = this.user1._typeAccount;
    }

    if(this.bancoVisible){
      this.name = this.user2._name1;
      this.lastname = this.user2._lastname1;
      this.balance = this.user2._balance1;
      this.typeAccount = this.user2._typeAccount1;
    }
  }

  accessOptions(value: boolean) {
    this.moneyOption = value;
  }
}
