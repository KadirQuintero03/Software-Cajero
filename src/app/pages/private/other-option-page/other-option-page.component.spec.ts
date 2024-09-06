import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherOptionPageComponent } from './other-option-page.component';

describe('OtherOptionPageComponent', () => {
  let component: OtherOptionPageComponent;
  let fixture: ComponentFixture<OtherOptionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherOptionPageComponent]
    });
    fixture = TestBed.createComponent(OtherOptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
