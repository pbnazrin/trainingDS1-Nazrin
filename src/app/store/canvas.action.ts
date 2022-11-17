import { Action } from '@ngrx/store';
import { IState } from './canvas.state';
import { fabric } from 'fabric';

export enum ActionTypes {
  CanvasUpdate = '[Canvas] Update Canvas',
  UndoCanvas = '[Canvas] Undo Canvas',
}
export class CanvasUpdate implements Action {
  public readonly type = ActionTypes.CanvasUpdate;
  constructor(public payload: IState) {}
}

export class UndoCanvas implements Action {
  public readonly type = ActionTypes.UndoCanvas;

  constructor(
    public payload: IState = {
      canvasState: JSON.stringify(fabric.Canvas),
      eventType: '',
    }
  ) {}
}
export type canvasActions = CanvasUpdate | UndoCanvas;
