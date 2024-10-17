import { createAction, props } from '@ngrx/store';

export const changeViewport = createAction(
  '[App] Changed Viewport',
  props<{ isMobile: boolean }>()
);

const appActions = {
  changeViewport,
};

export default appActions;
