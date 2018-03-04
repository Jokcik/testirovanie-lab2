import { TestBed, inject } from '@angular/core/testing';

import { Task2TreeService } from './task-2-tree.service';

describe('Task2TreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Task2TreeService]
    });
  });

  it('should be created', inject([Task2TreeService], (service: Task2TreeService) => {
    expect(service).toBeTruthy();
  }));
});
