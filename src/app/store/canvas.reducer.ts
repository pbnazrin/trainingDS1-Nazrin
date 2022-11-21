import { IState, initialState } from './canvas.state';
import { ActionTypes } from './canvas.action';
import { canvasActions } from './canvas.action';

export function canvasReducer(
  state: IState = initialState,
  action: canvasActions
): IState {
  if (
    action.type == ActionTypes.CanvasUpdate ||
    action.type == ActionTypes.UndoCanvas
  ) {
    return {
      ...state,
      canvasState: action.payload.canvasState,
      eventType: action.payload.eventType,
      undoEnabled: action.payload.undoEnabled,
    };
  } else {
    return state;
  }
}
