import { createReducer, on } from '@ngrx/store';
import { eventUpdate } from './canvas.action';
import { fabric } from 'fabric';
import { initialState } from './canvas.state';

export const canvasReducer = createReducer(
  initialState,
  on(eventUpdate, (state, action) => {
    return {
      ...state,
      eventState: action.eventState,
      eventType: action.eventType,
    };
  })
);
