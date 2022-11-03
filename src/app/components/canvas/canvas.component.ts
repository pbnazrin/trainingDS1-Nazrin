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
  canvas!: any;
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
        this.canvas.add(response.shape);
      });

    var addHandler = (options: Event) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Added',
          (options.target as HTMLTextAreaElement).type
        );
      }
    };

    var scaleHandler = (options: Event) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Scaled',
          (options.target as HTMLTextAreaElement).type
        );
      }
    };

    var moveHandler = (options: Event) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Translated',
          (options.target as HTMLTextAreaElement).type
        );
      }
    };

    var rotateHandler = (options: Event) => {
      if (options.target) {
        this.eventService.sendEvent(
          'Rotated',
          (options.target as HTMLTextAreaElement).type
        );
      }
    };

    this.canvas.on({
      'object:added': addHandler,
      'object:scaling': scaleHandler,
      'object:moving': moveHandler,
      'object:rotating': rotateHandler,
    });
  }
  ngOnDestroy(): void {
    this.$shapeSubs.unsubscribe();
  }
}
