/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import * as fromProjectsReducer from '../reducers';
import { ProjectsActions } from '../actions';
import { ProjectsSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class ProjectsStoreFacade {
  public readonly projects$ = this.store.pipe(select(ProjectsSelectors.selectProjects));

  public readonly getProjectsSuccess$ = this.actions$.pipe(ofType(ProjectsActions.getProjectsSuccess));

  constructor(private readonly actions$: Actions, private readonly store: Store<fromProjectsReducer.State>) {}

  public getProjects() {
    this.store.dispatch(ProjectsActions.getProjects());
  }
}
