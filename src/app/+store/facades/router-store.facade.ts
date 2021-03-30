import * as fromRoot from '../reducers';
import { Injectable } from '@angular/core';
import { RouterStoreSelectors } from '../selectors';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class RouterStoreFacade {
  public snapshot$ = this.store.select(RouterStoreSelectors.getRouterSnapshot);
  public baseURL$ = this.store.select(RouterStoreSelectors.selectBaseURL);
  public queryParamsWithBackRoute$ = this.store.select(RouterStoreSelectors.selectQueryParamsWithBackRoute);
  public params$ = this.store.select(RouterStoreSelectors.selectRouteParams);

  constructor(private readonly store: Store<fromRoot.State>) {}
}
