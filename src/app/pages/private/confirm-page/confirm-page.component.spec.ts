import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPageComponent } from './confirm-page.component';

describe('ConfirmPageComponent', () => {
  let component: ConfirmPageComponent;
  let fixture: ComponentFixture<ConfirmPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmPageComponent]
    });
    fixture = TestBed.createComponent(ConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
