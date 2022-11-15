import { Injectable } from '@angular/core';
import { eventUpdate } from '../store/canvas.action';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class NgrxService {
  public canvas!: fabric.Canvas;

  constructor(protected store: Store<{ canvasEventStore: '' }>) {}

  updateCanvasState(eventName: string) {
    this.store.dispatch(
      eventUpdate({
        canvasState: JSON.stringify(this.canvas),
        eventType: eventName,
      })
    );
  }
}
