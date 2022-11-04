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
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnDestroy {
  canvas!: fabric.Canvas;
  $shapeSubs!: Subscription;
  constructor(
    protected canvasService: CanvasShapesServiceService,
    protected eventService: EventsService
  ) {}

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {});
    this.canvasService.canvas = this.canvas;
    this.$shapeSubs = this.canvasService
      .drawShapeOnCanvas()
      .subscribe((response: any) => {
        this.canvas.add(response);
      });

    let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
    this.canvas.on('object:added', (options) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Added ' + shapes[options.target.type as keyof typeof shapes]
        );
      }
    });
    this.canvas.on('object:moving', (options) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Translated ' + shapes[options.target.type as keyof typeof shapes]
        );
      }
    });
    this.canvas.on('object:rotating', (options) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Rotated ' + shapes[options.target.type as keyof typeof shapes]
        );
      }
    });
    this.canvas.on('object:scaling', (options) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Scaled ' + shapes[options.target.type as keyof typeof shapes]
        );
      }
    });
  }
  ngOnDestroy(): void {
    this.$shapeSubs.unsubscribe();
  }
}
