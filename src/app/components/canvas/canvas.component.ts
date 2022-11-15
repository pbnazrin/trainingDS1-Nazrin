import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { CanvasShapesServiceService } from 'src/app/services/canvas-shapes-service.service';
import { fabric } from 'fabric';
import { EventsService } from 'src/app/services/events.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { eventUpdate } from '../../store/canvas.action';
import { IObjectModel } from 'src/app/models/object.model';
import { PropertiesService } from 'src/app/services/properties.service';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnDestroy {
  canvas!: fabric.Canvas;
  shapeSubs$!: Subscription;
  propSubs$!: Subscription;
  constructor(
    protected canvasService: CanvasShapesServiceService,
    protected eventService: EventsService,
    protected store: Store<{ canvasEventStore: '' }>,
    protected propertiesService: PropertiesService
  ) {}

  updateCanvasState(eventName: string) {
    this.store.dispatch(
      eventUpdate({
        canvasState: JSON.stringify(this.canvas),
        eventType: eventName,
      })
    );
  }

  getObjectProperties() {
    let objType = this.canvas.getActiveObject().get('type');
    //console.log(objType);
    //let fill = this.canvas.getActiveObject().get('fill');

    if (objType !== 'activeSelection') {
      let ObjProperties: IObjectModel = {
        stroke: this.canvas.getActiveObject().get('stroke') as string,
        strokeWidth: this.canvas.getActiveObject().get('strokeWidth') as number,
        fill: this.canvas.getActiveObject().get('fill') as string,
        angle: this.canvas.getActiveObject().get('angle') as number,
      };
      this.propertiesService.getObjectProperties(ObjProperties);
    } else {
    }
  }
  setObjectProperties(properties: IObjectModel) {
    console.log('props', properties);
    this.canvas.getActiveObject().set('stroke', properties.stroke);
    this.canvas.getActiveObject().set('strokeWidth', properties.strokeWidth);
    this.canvas.getActiveObject().set('fill', properties.fill);
    this.canvas.getActiveObject().set('angle', properties.angle);
    this.canvas.renderAll();
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {});
    this.canvasService.canvas = this.canvas;
    this.shapeSubs$ = this.canvasService
      .drawShapeOnCanvas()
      .subscribe((response: any) => {
        this.canvas.add(response);
      });
    this.propSubs$ = this.propertiesService
      .setObjectProperties()
      .subscribe((response) => {
        this.setObjectProperties(response);
      });
    let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
    this.canvas.on('object:added', (options) => {
      if (options.target) {
        var eventStr =
          'Added ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
        this.updateCanvasState(eventStr);
      }
    });
    this.canvas.on('object:moving', (options) => {
      if (options.target) {
        var eventStr =
          'Translated ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
      }
    });
    this.canvas.on('object:rotating', (options) => {
      if (options.target) {
        var eventStr =
          'Rotated ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
      }
    });
    this.canvas.on('object:scaling', (options) => {
      if (options.target) {
        var eventStr =
          'Scaled ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
      }
    });

    this.canvas.on('object:modified', (options) => {
      if (options.target) {
        var eventStr =
          'Modified ' + shapes[options.target.type as keyof typeof shapes];
        this.updateCanvasState(eventStr);
      }
    });

    this.canvas.on('selection:created', (options) => {
      if (options.target) {
        var eventStr =
          'Selected ' + shapes[options.target.type as keyof typeof shapes];
        //this.eventService.sendEvent(eventStr);
        this.updateCanvasState(eventStr);
        this.getObjectProperties();
      }
    });
  }
  ngOnDestroy(): void {
    this.shapeSubs$.unsubscribe();
  }
}
