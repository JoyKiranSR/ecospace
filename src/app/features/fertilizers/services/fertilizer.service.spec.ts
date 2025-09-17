import { TestBed } from '@angular/core/testing';

import { FertilizerService } from './fertilizer.service';

describe('FertilizerService', () => {
  let service: FertilizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertilizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
