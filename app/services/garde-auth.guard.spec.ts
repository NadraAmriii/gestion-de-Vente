import { TestBed } from '@angular/core/testing';

import { GardeAuthGuard } from './garde-auth.guard';

describe('GardeAuthGuard', () => {
  let guard: GardeAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardeAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
