import { AppEntity } from './app.models';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { isDevMode } from '@angular/core';
import { appReducer } from './app.reducer';

export const appFeatureKey = 'app';

export const reducers: ActionReducerMap<AppEntity> = {
  router: routerReducer,
  app: appReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppEntity>[] = isDevMode()
  ? [logger]
  : [];
