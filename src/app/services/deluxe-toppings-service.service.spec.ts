import { TestBed } from '@angular/core/testing';

import { DeluxeToppingsServiceService } from './deluxe-toppings-service.service';

describe('DeluxeToppingsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeluxeToppingsServiceService = TestBed.get(DeluxeToppingsServiceService);
    expect(service).toBeTruthy();
  });
});
