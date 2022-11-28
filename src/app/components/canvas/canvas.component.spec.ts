import { ComponentFixture, TestBed } from '@angular/core/testing';
import { fabric } from 'fabric';
import { CanvasComponent } from './canvas.component';
import { provideMockStore } from '@ngrx/store/testing';
import { EventsService } from 'src/app/services/events.service';
// import { select, Store } from '@ngrx/store';
// import { PropertiesService } from 'src/app/services/properties.service';
// import { NgrxService } from 'src/app/services/ngrx.service';
// import { IState } from 'src/app/store/canvas.state';
// import { undoCanvasSelector } from 'src/app/store/canvas.selector';
// import { getCanvas } from 'src/app/store/canvas.selector';
// import { UndoRedoServiceService } from 'src/app/services/undo-redo-service.service';
// import { CanvasShapesServiceService } from 'src/app/services/canvas-shapes-service.service';
describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;
  let eventService: EventsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CanvasComponent],
      providers: [
        provideMockStore({})  ],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasComponent],
      providers: [provideMockStore({}), EventsService],
    });
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventService = TestBed.inject(EventsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call event service on rotating an object ', () => {
    let rectObject = {
      left: (component.canvas.width as number) * Math.random(),
      top: (component.canvas.height as number) * Math.random(),
      fill: '#ffffff',
      width: 50,
      height: 50,
      stroke: '#00ff00',
      strokeWidth: 5,
    };

    let eventSpy = spyOn(eventService, 'sendEvent');
    let rect = new fabric.Rect(rectObject);
    component.canvas.add(rect);
    component.canvas.setActiveObject(rect);
    let modEvent = {
      action: 'rotate',
      target: component.canvas.getActiveObject(),
    };
    //let eventSpy =jasmine.createSpyObj(eventService,['sendEvent'])

    component.canvas.fire('object:moving',modEvent);
    expect(eventSpy).toHaveBeenCalledWith("Translated Rectangle");

  });

  it('should call event service on moving an object ', () => {
    let rectObject = {
      left: (component.canvas.width as number) * Math.random(),
      top: (component.canvas.height as number) * Math.random(),
      fill: '#ffffff',
      width: 50,
      height: 50,
      stroke: '#00ff00',
      strokeWidth: 5,
    };

    let eventSpy = spyOn(eventService, 'sendEvent');
    let rect = new fabric.Rect(rectObject);
    component.canvas.add(rect);
    component.canvas.setActiveObject(rect);
    let modEvent = {
      action: 'drag',
      target: component.canvas.getActiveObject(),
    };

    component.canvas.fire('object:moving',modEvent);
    expect(eventSpy).toHaveBeenCalledWith("Translated Rectangle");
  });

  it('should call event service on scaling an object ', () => {
    let rectObject = {
      left: (component.canvas.width as number) * Math.random(),
      top: (component.canvas.height as number) * Math.random(),
      fill: '#ffffff',
      width: 50,
      height: 50,
      stroke: '#00ff00',
      strokeWidth: 5,
    };

    let eventSpy = spyOn(eventService, 'sendEvent');
    let rect = new fabric.Rect(rectObject);
    component.canvas.add(rect);
    component.canvas.setActiveObject(rect);
    let modEvent = {
      action: 'scale',
      target: component.canvas.getActiveObject(),
    };

    component.canvas.fire('object:scaling',modEvent);
    expect(eventSpy).toHaveBeenCalledWith("Scaled Rectangle");
  });
});


    //let eventSpy =jasmine.createSpyObj(eventService,['sendEvent'])