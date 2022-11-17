import { TestBed } from '@angular/core/testing';

import { UndoRedoServiceService } from './undo-redo-service.service';

describe('UndoRedoServiceService', () => {
  let service: UndoRedoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UndoRedoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
