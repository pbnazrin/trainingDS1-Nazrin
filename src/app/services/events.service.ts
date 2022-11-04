import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  subject = new Subject<string>();

  sendEvent(message: string) {
    this.subject.next(message);
  }

  receiveEvent(): Observable<string> {
    return this.subject.asObservable();
  }
}
