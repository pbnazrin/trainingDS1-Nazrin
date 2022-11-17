import { fabric } from 'fabric';
export interface IState {
  canvasState: string;
  eventType: string;
}
export const initialState: IState = {
  canvasState: JSON.stringify(fabric.Canvas),
  eventType: '',
};
