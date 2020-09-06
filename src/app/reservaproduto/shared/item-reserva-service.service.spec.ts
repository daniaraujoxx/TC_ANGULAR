import { TestBed } from '@angular/core/testing';

import { ItemReservaServiceService } from './item-reserva-service.service';

describe('ItemReservaServiceService', () => {
  let service: ItemReservaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemReservaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
