import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { fabric } from 'fabric';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CanvasShapesServiceService {
  public shape: object = {};
  public canvas :any;

  subject = new Subject<Object>();

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
    this.subject.next({ shape: this.shape, name: 'Rectangle' });
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
    this.subject.next({ shape: this.shape, name: 'Triangle' });
  }

  drawCircle() {
    this.shape = new fabric.Circle({
      left: this.canvas.width * Math.random(),
      top: this.canvas.height * Math.random(),
      radius: 50,
      fill: 'transparent',
      stroke: '#000',
    });
    this.subject.next({ shape: this.shape, name: 'Circle' });
  }

  drawShapeOnCanvas(): Observable<object> {
    return this.subject.asObservable();
  }
}
