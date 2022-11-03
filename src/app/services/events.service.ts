import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  subject = new Subject<Object>();

  constructor() {}

  sendEvent(event: String, shapeName: String) {
    if (shapeName == 'rect') {
      shapeName = 'rectangle';
    }
    this.subject.next({ event, shapeName });
  }

  receiveEvent(): Observable<object> {
    console.log(typeof this.subject.asObservable);
    return this.subject.asObservable();
  }
}
