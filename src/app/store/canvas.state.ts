import { fabric } from 'fabric';
export interface IState {
  canvasState: string;
  eventType: string;
  undoEnabled: boolean;
}
export const initialState: IState = {
  canvasState: '',
  eventType: '',
  undoEnabled: false,
};
