import { TestBed } from '@angular/core/testing';

import { EatGoService } from './eat-go.service';

describe('EatGoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EatGoService = TestBed.get(EatGoService);
    expect(service).toBeTruthy();
  });
});
