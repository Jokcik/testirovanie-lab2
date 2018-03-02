import { TestBed, inject } from '@angular/core/testing';

import { Task1SortService } from './task-1-sort.service';

describe('Task1SortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Task1SortService]
    });
  });

  it('should be created', inject([Task1SortService], (service: Task1SortService) => {
    expect(service).toBeTruthy();
  }));
});
