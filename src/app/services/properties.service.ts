import { Injectable } from '@angular/core';
import { IObjectModel } from '../models/object.model';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  objectProperties$ = new Subject<IObjectModel>();
  constructor() {}

  getObjectProperties(properties: IObjectModel) {
    console.log('prop', properties);
    this.objectProperties$.next(properties);
  }
  setObjectProperties(): Observable<IObjectModel> {
    return this.objectProperties$.asObservable();
  }
}
