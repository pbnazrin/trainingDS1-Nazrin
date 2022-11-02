import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable, EventEmitter } from '@angular/core';
import { fabric } from 'fabric';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CanvasShapesServiceService {
  public shape: any;
  public canvas: any;

  addShapeTOCanvasEvent = new EventEmitter();

  constructor() {}

  drawRect() {
    this.shape = new fabric.Rect({
      left: this.canvas.width * Math.random(),
      top: this.canvas.height * Math.random(),
      fill: 'transparent',
      width: 50,
      height: 50,
      stroke: '#000',
    });
    this.addShapeTOCanvasEvent.emit({ shape: this.shape, name: 'Rectangle' });
  }

  drawTriangle() {
    this.shape = new fabric.Triangle({
      left: this.canvas.width * Math.random(),
      top: this.canvas.height * Math.random(),
      width: 100,
      height: 50,
      fill: 'transparent',
      stroke: '#000',
    });
    this.addShapeTOCanvasEvent.emit({ shape: this.shape, name: 'Triangle' });
  }

  drawCircle() {
    this.shape = new fabric.Circle({
      left: this.canvas.width * Math.random(),
      top: this.canvas.height * Math.random(),
      radius: 50,
      fill: 'transparent',
      stroke: '#000',
    });
    this.addShapeTOCanvasEvent.emit({ shape: this.shape, name: 'Circle' });
  }
}
