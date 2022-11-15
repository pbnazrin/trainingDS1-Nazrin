import { Injectable } from '@angular/core';
import { IObjectModel } from '../models/object.model';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  public canvas!: fabric.Canvas;

  objectProperties$ = new Subject<IObjectModel>();
  disabled$ = new Subject<boolean>();
  message$ = new Subject<string>();
  constructor() {}

  getProperties() {
    let ObjProperties: IObjectModel = {
      stroke: this.canvas.getActiveObject().get('stroke') as string,
      strokeWidth: this.canvas.getActiveObject().get('strokeWidth') as number,
      fill: this.canvas.getActiveObject().get('fill') as string,
      angle: this.canvas.getActiveObject().get('angle') as number,
    };
    this.objectProperties$.next(ObjProperties);
  }
  setObjectProperties(properties: IObjectModel) {
    this.canvas.getActiveObject().set('stroke', properties.stroke);
    this.canvas.getActiveObject().set('strokeWidth', properties.strokeWidth);
    this.canvas.getActiveObject().set('fill', properties.fill);
    this.canvas.getActiveObject().set('angle', properties.angle);
    this.canvas.renderAll();
  }

  getObjectProperties() {
    this.canvas.on('selection:created', (options) => {
      let objType = this.canvas.getActiveObject().get('type');
      if (objType !== 'activeSelection') {
        this.getProperties();
        this.disabled$.next(false);
      } else {
        this.message$.next(
          'Multiple objects are selected. No properties available for multiple objects'
        );
        this.disabled$.next(true);
      }
    });
    this.canvas.on('selection:cleared', (options) => {
      this.message$.next('No object selected');
      this.disabled$.next(true);
    });
  }

  getObjectPropertiesOnPanel(): Observable<IObjectModel> {
    return this.objectProperties$.asObservable();
  }
  getDisabled(isDisabled: boolean) {
    console.log(isDisabled);
    this.disabled$.next(isDisabled);
  }
  setDisabled(): Observable<boolean> {
    return this.disabled$.asObservable();
  }

  setMessage(): Observable<string> {
    return this.message$.asObservable();
  }
}
