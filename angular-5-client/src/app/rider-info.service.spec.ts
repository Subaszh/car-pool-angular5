import { TestBed, inject } from '@angular/core/testing';

import { RiderInfoService } from './rider-info.service';

describe('RiderInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiderInfoService]
    });
  });

  it('should be created', inject([RiderInfoService], (service: RiderInfoService) => {
    expect(service).toBeTruthy();
  }));
});
