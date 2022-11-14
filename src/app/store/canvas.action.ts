import { createAction, props } from '@ngrx/store';

export const eventUpdate = createAction(
  '[Canvas] Update Canvas',
  props<{
    canvasState: string;
    eventType: string;
  }>()
);
