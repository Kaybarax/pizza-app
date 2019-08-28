import { TestBed } from '@angular/core/testing';

import { PizzaListServiceService } from './pizza-list-service.service';

describe('PizzaListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaListServiceService = TestBed.get(PizzaListServiceService);
    expect(service).toBeTruthy();
  });
});
