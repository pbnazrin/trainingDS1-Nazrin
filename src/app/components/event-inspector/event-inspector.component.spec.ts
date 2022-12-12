import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsService } from 'src/app/services/events.service';

import { EventInspectorComponent } from './event-inspector.component';
import { of } from 'rxjs';

describe('EventInspectorComponent', () => {
  let component: EventInspectorComponent;
  let fixture: ComponentFixture<EventInspectorComponent>;
  let eventService: EventsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventInspectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInspectorComponent);
    component = fixture.componentInstance;
    eventService = TestBed.inject(EventsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive data on subscription', () => {
    let eventSpy = spyOn(eventService, 'receiveEvent');
    const response: string = '';
    eventSpy.and.returnValue(of(response));
    component.ngOnInit();
    expect(component.text).toEqual(response);
  });
});
