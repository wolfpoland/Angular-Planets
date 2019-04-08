import { TestBed } from '@angular/core/testing';

import { ListDataService } from './list-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ListDataService = TestBed.get(ListDataService);
    expect(service).toBeTruthy();
  });
});
