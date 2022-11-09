import { TestBed } from '@angular/core/testing';

import { JitsService } from './jits.service';

describe('JitsService', () => {
  let service: JitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
