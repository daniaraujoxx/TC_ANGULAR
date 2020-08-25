import { TestBed } from '@angular/core/testing';

import { RelatorioclienteService } from './relatoriocliente.service';

describe('RelatorioclienteService', () => {
  let service: RelatorioclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
