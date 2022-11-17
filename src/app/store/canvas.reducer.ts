import { IState, initialState } from './canvas.state';
import { ActionTypes } from './canvas.action';
import { canvasActions } from './canvas.action';

export function canvasReducer(
  state: IState = initialState,
  action: canvasActions
): IState {
  console.log('type', action.type);

  switch (action.type) {
    case ActionTypes.CanvasUpdate:
      return {
        ...state,
        canvasState: action.payload.canvasState,
        eventType: action.payload.eventType,
      };
    case ActionTypes.UndoCanvas:
      return {
        ...state,
      };
    default:
      return state;
  }
}
