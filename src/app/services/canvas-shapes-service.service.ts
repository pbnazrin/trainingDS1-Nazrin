import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { fabric } from 'fabric';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CanvasShapesServiceService {
  public shape!: fabric.Object;
  public canvas!: fabric.Canvas;

  subject = new Subject<Object>();

  constructor() {}

  drawRect() {
    this.shape = new fabric.Rect({
      left: (this.canvas.width as number) * Math.random(),
      top: (this.canvas.height as number) * Math.random(),
      fill: 'transparent',
      width: 50,
      height: 50,
      stroke: '#000',
    });
    this.subject.next(this.shape);
  }

  drawTriangle() {
    this.shape = new fabric.Triangle({
      left: (this.canvas.width as number) * Math.random(),
      top: (this.canvas.height as number) * Math.random(),
      width: 100,
      height: 50,
      fill: 'transparent',
      stroke: '#000',
    });
    this.subject.next(this.shape);
  }

  drawCircle() {
    this.shape = new fabric.Circle({
      left: (this.canvas.width as number) * Math.random(),
      top: (this.canvas.height as number) * Math.random(),
      radius: 50,
      fill: 'transparent',
      stroke: '#000',
    });
    this.subject.next(this.shape);
  }

  drawShapeOnCanvas(): Observable<Object> {
    return this.subject.asObservable();
  }
}
