import { TestBed } from '@angular/core/testing';

import { GrowthStageService } from './growth-stage.service';

describe('GrowthStageService', () => {
  let service: GrowthStageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowthStageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
