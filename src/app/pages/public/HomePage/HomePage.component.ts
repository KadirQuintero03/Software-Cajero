import { Component, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css'],
})

export class HomePageComponent {
  home: boolean = true;
  login: boolean = false;

  access(){
    this.home = false;
    this.login = true;
  }
}
