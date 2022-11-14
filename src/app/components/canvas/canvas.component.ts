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

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnDestroy {
  canvas!: fabric.Canvas;
  shapeSubs$!: Subscription;
  constructor(
    protected canvasService: CanvasShapesServiceService,
    protected eventService: EventsService,
    protected store: Store<{ canvasEventStore: '' }>
  ) {}

  updateCanvasState(eventName: string) {
    this.store.dispatch(
      eventUpdate({
        canvasState: JSON.stringify(this.canvas),
        eventType: eventName,
      })
    );
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {});
    this.canvasService.canvas = this.canvas;
    this.shapeSubs$ = this.canvasService
      .drawShapeOnCanvas()
      .subscribe((response: any) => {
        this.canvas.add(response);
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
  }
  ngOnDestroy(): void {
    this.shapeSubs$.unsubscribe();
  }
}
