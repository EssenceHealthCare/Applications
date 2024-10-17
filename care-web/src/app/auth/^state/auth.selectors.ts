import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);

const authSelectors = {
  isLoggedIn,
  isLoggedOut,
};

export default authSelectors;
