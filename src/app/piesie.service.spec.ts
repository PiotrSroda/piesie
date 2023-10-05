import { TestBed } from '@angular/core/testing';

import { PiesieService } from './piesie.service';

describe('PiesieService', () => {
  let service: PiesieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiesieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
