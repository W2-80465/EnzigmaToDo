import { TestBed } from '@angular/core/testing';

import { TaskSetviceService } from './task-setvice.service';

describe('TaskSetviceService', () => {
  let service: TaskSetviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSetviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
  