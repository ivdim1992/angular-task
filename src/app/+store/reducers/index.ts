import { InjectionToken } from "@angular/core";
import * as fromRouter from "@ngrx/router-store";
import { Action, ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { ISerializedRouterState } from "../router-serializer";

export const routerKey = "router";

export interface State {
  router: fromRouter.RouterReducerState;
}

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<State, Action>>(
  "Root reducers",
  {
    factory: () => ({
      router: fromRouter.routerReducer,
    }),
  }
);

export const gerRouterState = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<ISerializedRouterState>
>(routerKey);
