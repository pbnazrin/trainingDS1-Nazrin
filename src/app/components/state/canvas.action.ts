import { createAction, props } from '@ngrx/store';

export const eventUpdate = createAction(
  '[Canvas] Update Canvas',
  props<{
    eventState: string;
    eventType: string;
  }>()
);
