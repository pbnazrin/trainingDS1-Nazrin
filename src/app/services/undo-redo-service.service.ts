import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UndoRedoServiceService {
  canvas!: string;

  eventStack: Array<string> = [JSON.stringify(' ')];
  redoStack: Array<string> = [];

  undoEnable$ = new BehaviorSubject<boolean>(false);
  redoEnable$ = new BehaviorSubject<boolean>(false);
  constructor() {}
  storeState(newAction: string) {
    this.eventStack.push(newAction);
    this.redoStack = [];
    this.undoEnable$.next(true);
  }
  undoState() {
    if (this.eventStack.length == 2) {
      this.undoEnable$.next(false);
    }
    this.redoEnable$.next(true);
    let poppedState = this.eventStack.pop() as string;
    this.redoStack.push(poppedState);
    return this.eventStack[this.eventStack.length - 1];
  }
  redoState() {
    if (this.redoStack.length == 1 || this.redoStack.length == 0) {
      this.redoEnable$.next(false);
    }
    let popped = this.redoStack.pop();
    this.undoEnable$.next(true);
    this.eventStack.push(popped!);
    return popped;
  }

  undoEnable(): Observable<boolean> {
    return this.undoEnable$.asObservable();
  }
  redoEnable(): Observable<boolean> {
    return this.redoEnable$.asObservable();
  }
}
