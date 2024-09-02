import { TestBed } from '@angular/core/testing';

import { StateServiceService } from './state-service.service';

describe('StateServiceService', () => {
  let service: StateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
