import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { appFeatureKey } from './index';

export const selectAppState = createFeatureSelector<AppState>(appFeatureKey);

export const getIsMobile = createSelector(
  selectAppState,
  (state: AppState) => state.isMobile
);

const appSelectors = {
  getIsMobile,
};

export default appSelectors;
