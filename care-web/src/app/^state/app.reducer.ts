import { AppEntity } from './app.models';
import { createReducer, on } from '@ngrx/store';
import appActions from './app.actions';

export interface AppState extends AppEntity {
  isMobile: boolean;
}

export const initialState: AppState = {
  isMobile: false,
};

export const appReducer = createReducer(
  initialState,
  on(appActions.changeViewport, (state, action) => ({
    ...state,
    isMobile: action.isMobile,
  }))
);
