import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  addEvent = new EventEmitter();
  public variable: any;
  constructor() {}
  newEvent(event: String, shapeName: String) {
    this.addEvent.emit({ event, shapeName });
  }
}
