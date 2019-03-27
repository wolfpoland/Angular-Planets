import { TestBed } from '@angular/core/testing';

import { ListDataService } from './list-data.service';

describe('ListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListDataService = TestBed.get(ListDataService);
    expect(service).toBeTruthy();
  });
});
