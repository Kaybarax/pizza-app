import { TestBed } from '@angular/core/testing';

import { BasicToppingsServiceService } from './basic-toppings-service.service';

describe('BasicToppingsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicToppingsServiceService = TestBed.get(BasicToppingsServiceService);
    expect(service).toBeTruthy();
  });
});
