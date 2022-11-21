import { Action } from '@ngrx/store';
import { IState } from './canvas.state';
import { fabric } from 'fabric';

export enum ActionTypes {
  CanvasUpdate = '[Canvas] Update Canvas',
  UndoCanvas = '[Canvas] Undo Canvas',
  RedoCanvas = '[Canvas] Redo Canvas',
  modifiedStateAction = '[Canvas] modifiedStateAction',
}
export class CanvasUpdate implements Action {
  public readonly type = ActionTypes.CanvasUpdate;
  constructor(public payload: IState) {}
}

export class UndoCanvas implements Action {
  public readonly type = ActionTypes.UndoCanvas;
  constructor(
    public payload: IState = {
      canvasState: '',
      eventType: 'Undo Canvas',
      undoEnabled: true,
    }
  ) {}
}
export class RedoCanvas implements Action {
  public readonly type = ActionTypes.RedoCanvas;
  constructor(
    public payload: IState = {
      canvasState: '',
      eventType: 'Redo Canvas',
      undoEnabled: true,
    }
  ) {}
}

export class modifiedStateAction implements Action {
  public readonly type = ActionTypes.UndoCanvas;
  constructor(public payload: IState) {}
}
export type canvasActions =
  | CanvasUpdate
  | UndoCanvas
  | modifiedStateAction
  | RedoCanvas;
