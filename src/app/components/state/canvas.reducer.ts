import { createReducer, on } from '@ngrx/store';
import { eventUpdate } from './canvas.action';
import { fabric } from 'fabric';

export const initialState = {
  eventState: JSON.stringify(fabric.Canvas),
  eventType: '',
};

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
