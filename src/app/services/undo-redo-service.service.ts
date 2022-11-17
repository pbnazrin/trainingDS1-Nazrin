import { Injectable } from '@angular/core';
import { IState } from '../store/canvas.state';
@Injectable({
  providedIn: 'root',
})
export class UndoRedoServiceService {
  eventStack: Array<IState> = [];
  constructor() {}
  storeState(state: IState) {
    this.eventStack.push(state);
    console.log('eventStack', this.eventStack);
  }
  retrieveState() {
    return this.eventStack.pop();
  }
}
