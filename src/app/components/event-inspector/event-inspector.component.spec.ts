import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInspectorComponent } from './event-inspector.component';

describe('EventInspectorComponent', () => {
  let component: EventInspectorComponent;
  let fixture: ComponentFixture<EventInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
