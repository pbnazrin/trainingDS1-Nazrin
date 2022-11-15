import { Component, OnInit, OnDestroy } from '@angular/core';
import { CanvasShapesServiceService } from 'src/app/services/canvas-shapes-service.service';
import { fabric } from 'fabric';
import { EventsService } from 'src/app/services/events.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { PropertiesService } from 'src/app/services/properties.service';
import { NgrxService } from 'src/app/services/ngrx.service';
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
    protected propertiesService: PropertiesService,
    protected ngrxService: NgrxService
  ) {}

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {});
    this.canvasService.canvas = this.canvas;
    this.propertiesService.canvas = this.canvas;
    this.ngrxService.canvas = this.canvas;
    this.shapeSubs$ = this.canvasService
      .drawShapeOnCanvas()
      .subscribe((response: any) => {
        this.canvas.add(response);
      });

    let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
    this.canvas.on('object:added', (options) => {
      if (options.target) {
        let eventStr =
          'Added ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
        this.ngrxService.updateCanvasState(eventStr);
      }
    });
    this.canvas.on('object:moving', (options) => {
      if (options.target) {
        let eventStr =
          'Translated ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
      }
    });
    this.canvas.on('object:rotating', (options) => {
      if (options.target) {
        let eventStr =
          'Rotated ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
      }
    });
    this.canvas.on('object:scaling', (options) => {
      if (options.target) {
        let eventStr =
          'Scaled ' + shapes[options.target.type as keyof typeof shapes];
        this.eventService.sendEvent(eventStr);
      }
    });

    this.canvas.on('object:modified', (options: any) => {
      if (options.target) {
        console.log(options);
        let eventStr =
          options.action +
          ' ' +
          shapes[options.target.type as keyof typeof shapes];
        this.ngrxService.updateCanvasState(eventStr);
      }
    });
  }
  ngOnDestroy(): void {
    this.shapeSubs$.unsubscribe();
  }
}
