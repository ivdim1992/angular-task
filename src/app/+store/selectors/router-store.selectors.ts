import { createFeatureSelector, createSelector } from '@ngrx/store';
import { routerKey, State } from '../reducers';
import * as fromRouter from '@ngrx/router-store';
import { ISerializedRouterState } from '../router-serializer';

const getRouterState = createFeatureSelector<State, fromRouter.RouterReducerState<ISerializedRouterState>>(routerKey);

const getRouterSnapshot = createSelector(getRouterState, (routerReducerState) => routerReducerState.state);

const selectBaseURL = createSelector(getRouterSnapshot, (state) => state.url.split('?')[0]);

const selectQueryParams = createSelector(getRouterSnapshot, (state) => {
  const { backRoute, ...params } = state.queryParams;

  return params;
});

const selectQueryParamsWithBackRoute = createSelector(getRouterSnapshot, (state) => state.queryParams);

const selectRouteParams = createSelector(getRouterSnapshot, (state) => state.params);

export const RouterStoreSelectors = {
  getRouterSnapshot,
  getRouterState,
  selectBaseURL,
  selectQueryParams,
  selectRouteParams,
  selectQueryParamsWithBackRoute,
};
