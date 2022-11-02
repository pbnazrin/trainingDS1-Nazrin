import { TestBed } from '@angular/core/testing';

import { CanvasShapesServiceService } from './canvas-shapes-service.service';

describe('CanvasShapesServiceService', () => {
  let service: CanvasShapesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasShapesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
