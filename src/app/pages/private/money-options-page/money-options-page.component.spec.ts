import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyOptionsPageComponent } from './money-options-page.component';

describe('MoneyOptionsPageComponent', () => {
  let component: MoneyOptionsPageComponent;
  let fixture: ComponentFixture<MoneyOptionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyOptionsPageComponent]
    });
    fixture = TestBed.createComponent(MoneyOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
