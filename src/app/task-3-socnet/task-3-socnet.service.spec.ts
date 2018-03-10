import { TestBed, inject } from '@angular/core/testing';

import { Task3SocnetService } from './task-3-socnet.service';

describe('Task3SocnetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Task3SocnetService]
    });
  });

  it('should be created', inject([Task3SocnetService], (service: Task3SocnetService) => {
    expect(service).toBeTruthy();
  }));
});
