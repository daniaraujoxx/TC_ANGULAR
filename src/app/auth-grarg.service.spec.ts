import { TestBed } from '@angular/core/testing';

import { AuthGrargService } from './auth/auth-grarg.service';

describe('AuthGrargService', () => {
  let service: AuthGrargService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGrargService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
