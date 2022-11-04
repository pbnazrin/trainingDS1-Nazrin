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
    console.log('test22', this.canvas.width);
    this.shape = new fabric.Rect({
      left: (this.canvas.width as number) * Math.random(),
      top: (this.canvas.height as number) * Math.random(),
      fill: 'transparent',
      width: 50,
      height: 50,
      stroke: '#000',
    });
    this.subject.next({ shape: this.shape, name: 'Rectangle' });
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
    this.subject.next({ shape: this.shape, name: 'Triangle' });
  }

  drawCircle() {
    this.shape = new fabric.Circle({
      left: (this.canvas.width as number) * Math.random(),
      top: (this.canvas.height as number) * Math.random(),
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
