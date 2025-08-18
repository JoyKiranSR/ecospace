import { TestBed } from '@angular/core/testing';

import { SoilsService } from './soils.service';

describe('SoilsService', () => {
  let service: SoilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
