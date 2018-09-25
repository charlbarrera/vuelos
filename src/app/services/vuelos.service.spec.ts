import { TestBed, inject } from '@angular/core/testing';

import { VuelosService } from './vuelos.service';

describe('VuelosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VuelosService]
    });
  });

  it('should be created', inject([VuelosService], (service: VuelosService) => {
    expect(service).toBeTruthy();
  }));
});
