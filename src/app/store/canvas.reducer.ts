import { IState, initialState } from './canvas.state';
import { ActionTypes } from './canvas.action';
import { canvasActions } from './canvas.action';

export function canvasReducer(
  state: IState = initialState,
  action: canvasActions
): IState {
  switch (action.type) {
    case ActionTypes.CanvasUpdate:
      return {
        ...state,
        canvasState: action.payload.canvasState,
        eventType: action.payload.eventType,
        undoEnabled: action.payload.undoEnabled,
      };

    case ActionTypes.UndoCanvas:
      return {
        ...state,
        canvasState: action.payload.canvasState,
        eventType: action.payload.eventType,
        undoEnabled: action.payload.undoEnabled,
      };

    default:
      return state;
  }
}
