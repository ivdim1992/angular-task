import { createSelector } from "@ngrx/store";
import { gerRouterState } from "../reducers";

const getRouterSnapshot = createSelector(
  gerRouterState,
  (routerReducerState) => routerReducerState.state
);

export const RouterStoreSelectors = {
  getRouterSnapshot,
  gerRouterState,
};
