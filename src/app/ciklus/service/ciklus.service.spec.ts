import { TestBed } from '@angular/core/testing';

import { CiklusService } from './ciklus.service';

describe('CiklusService', () => {
  let service: CiklusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiklusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
