import { Injectable } from '@angular/core';
import { CanvasUpdate, UndoCanvas, RedoCanvas } from '../store/canvas.action';
import { Store } from '@ngrx/store';
import { IState } from '../store/canvas.state';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root',
})
export class NgrxService {
  public canvas!: fabric.Canvas;

  constructor(protected store: Store<{ state: IState }>) {}

  updateCanvasState(eventName: string) {
    this.store.dispatch(
      new CanvasUpdate({
        canvasState: JSON.stringify(this.canvas),
        eventType: eventName,
        undoEnabled: false,
      })
    );
  }

  UndoCanvasState() {
    this.store.dispatch(new UndoCanvas());
  }
  RedoCanvasState() {
    this.store.dispatch(new RedoCanvas());
  }
}
