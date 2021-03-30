import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { localStorageSync } from 'ngrx-store-localstorage';

export const routerKey = 'router';

export interface State {
  router: fromRouter.RouterReducerState;
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['employees', 'projects'], rehydrate: true, storage: sessionStorage })(reducer);
}

export const metaReducers = [localStorageSyncReducer];

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers', {
  factory: () => ({
    router: fromRouter.routerReducer,
  }),
});
