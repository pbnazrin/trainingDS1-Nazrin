import {
  StoreModule,
  ActionReducer,
  MetaReducer,
  META_REDUCERS,
} from '@ngrx/store';
import { UndoRedoServiceService } from '../services/undo-redo-service.service';
import { Action } from '@ngrx/store';
import { IState } from './canvas.state';
import { ActionTypes, canvasActions } from './canvas.action';
import { AppState } from './canvas.index';
import { modifiedStateAction } from './canvas.action';
export function undoRedoMetaReducer(
  undoRedoService: UndoRedoServiceService
): MetaReducer<AppState, canvasActions> {
  function undoRedo(
    reducer: ActionReducer<AppState, canvasActions>
  ): ActionReducer<AppState, canvasActions> {
    return (state, action: canvasActions) => {
      let modifiedAction = action;
      let modifiedState;
      let flag = 0;
      switch (action.type) {
        case ActionTypes.CanvasUpdate:
          undoRedoService.storeState(action.payload.canvasState);
          break;
        case ActionTypes.UndoCanvas:
          modifiedState = undoRedoService.undoState();
          break;
        case ActionTypes.RedoCanvas:
          modifiedState = undoRedoService.redoState(action.payload.canvasState);
          break;
      }

      if (modifiedState != undefined) {
        modifiedAction = new modifiedStateAction({
          canvasState: modifiedState as string,
          eventType: 'undo Action',
          undoEnabled: true,
        });
      }

      return reducer(state, modifiedAction);
    };
  }

  return undoRedo;
}
