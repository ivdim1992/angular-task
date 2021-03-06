/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as fromProjectsReducer from '../reducers';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { ProjectsActions } from '../actions';
import { ProjectsSelectors } from '../selectors';
import { IProject } from '@app/projects/interfaces';

@Injectable({ providedIn: 'root' })
export class ProjectsStoreFacade {
  public readonly projects$ = this.store.pipe(select(ProjectsSelectors.selectProjects));

  public readonly getProjectsSuccess$ = this.actions$.pipe(ofType(ProjectsActions.getProjectsSuccess));

  constructor(private readonly actions$: Actions, private readonly store: Store<fromProjectsReducer.State>) {}

  public getProjects() {
    this.store.dispatch(ProjectsActions.getProjects());
  }

  public createProject(project: IProject) {
    this.store.dispatch(ProjectsActions.createProject({ project }));
  }

  public startProject(id: string, status: string) {
    this.store.dispatch(ProjectsActions.startProject({ id, status }));
  }

  public removeProject(id: string) {
    this.store.dispatch(ProjectsActions.removeProject({ id }));
  }

  public assignEmployee(id: string, projectName: string, employee: { id: string; name: string }) {
    this.store.dispatch(ProjectsActions.assignEmployeeToProject({ id, projectName, employee }));
  }
}
