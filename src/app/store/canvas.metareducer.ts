import { ActionReducer, MetaReducer } from '@ngrx/store';
import { UndoRedoServiceService } from '../services/undo-redo-service.service';
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
      switch (action.type) {
        case ActionTypes.CanvasUpdate:
          undoRedoService.storeState(action.payload.canvasState);
          break;
        case ActionTypes.UndoCanvas:
          modifiedState = undoRedoService.undoState();
          break;
        case ActionTypes.RedoCanvas:
          modifiedState = undoRedoService.redoState();
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
