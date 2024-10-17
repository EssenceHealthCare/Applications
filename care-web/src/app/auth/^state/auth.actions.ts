import { createAction, props } from '@ngrx/store';
import { UserDto } from '../../shared/api/auth-api';

export const login = createAction(
  '[Login Page] User Login',
  props<{ user: UserDto }>()
);

export const logout = createAction('[Top Menu] Logout');

const authActions = {
  logout,
  login,
};

export default authActions;
