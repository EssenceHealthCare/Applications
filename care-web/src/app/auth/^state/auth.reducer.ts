import { createReducer, on } from '@ngrx/store';
import { UserDto } from '../../shared/api/auth-api';
import authActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  user?: UserDto;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.login, (state, action) => ({
    ...state,
    user: action.user,
  })),
  on(authActions.logout, (state, action) => ({
    ...state,
    user: undefined,
  }))
);
