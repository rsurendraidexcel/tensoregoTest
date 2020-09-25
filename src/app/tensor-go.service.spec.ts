import { TestBed } from '@angular/core/testing';

import { TensorGoService } from './tensor-go.service';

describe('TensorGoService', () => {
  let service: TensorGoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TensorGoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
