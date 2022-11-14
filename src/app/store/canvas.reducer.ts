import { createReducer, on } from '@ngrx/store';
import { eventUpdate } from './canvas.action';
import { initialState } from './canvas.state';

export const canvasReducer = createReducer(
  initialState,
  on(eventUpdate, (state, action) => {
    return {
      ...state,
      canvasState: action.canvasState,
      eventType: action.eventType,
    };
  })
);
