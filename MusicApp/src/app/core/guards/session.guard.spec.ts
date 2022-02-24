import { TestBed } from '@angular/core/testing';

import { Session}Guard } from './session}.guard';

describe('Session}Guard', () => {
  let guard: Session}Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Session}Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
