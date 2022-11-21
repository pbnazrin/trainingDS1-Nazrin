import { Injectable } from '@angular/core';
import { IState } from '../store/canvas.state';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoServiceService {
  canvas!: string;

  eventStack: Array<string> = [JSON.stringify(' ')];
  redoStack: Array<string> = [];
  constructor() {}
  storeState(newAction: string) {
    this.eventStack.push(newAction);
  }
  undoState() {
    let poppedState = this.eventStack.pop() as string;
    this.redoStack.push(poppedState);
    return this.eventStack[this.eventStack.length - 1];
  }
  redoState(newAction: string) {
    let popped = this.redoStack.pop();
    this.eventStack.push(popped!);
    return popped;
  }
}
