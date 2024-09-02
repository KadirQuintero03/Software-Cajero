import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent {
  @Output() changeState = new EventEmitter<boolean>();

  close(){
    this.changeState.emit(false);
  }
}
