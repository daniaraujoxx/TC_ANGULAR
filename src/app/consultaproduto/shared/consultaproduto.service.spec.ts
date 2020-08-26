import { TestBed } from '@angular/core/testing';

import { ConsultaprodutoService } from './consultaproduto.service';

describe('ConsultaprodutoService', () => {
  let service: ConsultaprodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaprodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
