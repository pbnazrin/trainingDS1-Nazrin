import { IState } from './canvas.state';
import { ActionReducerMap } from '@ngrx/store';
import { canvasReducer } from './canvas.reducer';

export interface AppState {
  eventList: IState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  eventList: canvasReducer,
};
