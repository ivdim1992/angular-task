import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

export const routerKey = 'router';

export interface State {
  router: fromRouter.RouterReducerState;
}

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers', {
  factory: () => ({
    router: fromRouter.routerReducer,
  }),
});
