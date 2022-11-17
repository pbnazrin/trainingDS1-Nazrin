import {
  StoreModule,
  ActionReducer,
  MetaReducer,
  META_REDUCERS,
} from '@ngrx/store';
import { UndoRedoServiceService } from '../services/undo-redo-service.service';
import { Action } from '@ngrx/store';
import { IState } from './canvas.state';
import { ActionTypes } from './canvas.action';

export function undoRedoMetaReducer(
  undoRedoService: UndoRedoServiceService
): MetaReducer<any> {
  function undoRedo(
    reducer: ActionReducer<IState, Action>
  ): ActionReducer<IState, Action> {
    return (state, action: Action) => {
      let modifiedAction = action;
      let modifiedState;

      console.log('state', state);

      switch (action.type) {
        case ActionTypes.CanvasUpdate:
          undoRedoService.storeState(state as IState);
          break;
        case ActionTypes.UndoCanvas:
          modifiedState = undoRedoService.retrieveState();
          break;
      }

      console.log(state);
      return reducer(modifiedState, modifiedAction);
    };
  }

  return undoRedo;
}
