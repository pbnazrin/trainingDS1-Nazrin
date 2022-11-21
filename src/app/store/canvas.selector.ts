import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './canvas.state';

const canvasState = createFeatureSelector<IState>('eventList');

export const getCanvas = createSelector(canvasState, (canvas: IState) => {
  return canvas.canvasState;
});

export const undoCanvasSelector = createSelector(
  canvasState,
  (canvas: IState) => {
    if (canvas.undoEnabled) {
      return canvas.canvasState;
    } else {
      return null;
    }
  }
);
