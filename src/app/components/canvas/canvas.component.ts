import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CanvasShapesServiceService } from 'src/app/services/canvas-shapes-service.service';
import { fabric } from 'fabric';
import { EventsService } from 'src/app/services/events.service';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  private log: any;
  @Output() sender = new EventEmitter();
  canvas: any;
  constructor(
    protected canvasService: CanvasShapesServiceService,
    protected eventService: EventsService
  ) {}

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {});
    this.canvasService.canvas = this.canvas;
    this.canvasService.addShapeTOCanvasEvent.subscribe((response: any) => {
      response.shape.on('added', () => {
        this.eventService.newEvent('Added', response.name);
      });
      this.canvas.add(response.shape);
      response.shape.on('scaling', () => {
        this.eventService.newEvent('Scaled', response.name);
      });
      response.shape.on('moving', () => {
        this.eventService.newEvent('Translated', response.name);
      });
      response.shape.on('rotating', () => {
        this.eventService.newEvent('Rotated', response.name);
      });
    });
  }
}