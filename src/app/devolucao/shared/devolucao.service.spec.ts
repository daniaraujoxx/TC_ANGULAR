import { TestBed } from '@angular/core/testing';

import { DevolucaoService } from './devolucao.service';

describe('DevolucaoService', () => {
  let service: DevolucaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevolucaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
