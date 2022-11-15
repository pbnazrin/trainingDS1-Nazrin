import { Injectable } from '@angular/core';
import { IObjectModel } from '../models/object.model';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  objectProperties$ = new Subject<IObjectModel>();
  disabled$ = new Subject<boolean>();
  message$ = new Subject<string>();
  constructor() {}

  getObjectProperties(properties: IObjectModel) {
    //console.log('prop', properties);
    this.objectProperties$.next(properties);
  }
  setObjectProperties(): Observable<IObjectModel> {
    return this.objectProperties$.asObservable();
  }
  getDisabled(isDisabled:boolean){
    console.log(isDisabled)
    this.disabled$.next(isDisabled);
  }
  setDisabled():Observable<boolean>{
    return this.disabled$.asObservable();
  }
  getMessage(msg:string){
    this.message$.next(msg);
  }
  setMessage():Observable<string>{
    return this.message$.asObservable();
  }
}
