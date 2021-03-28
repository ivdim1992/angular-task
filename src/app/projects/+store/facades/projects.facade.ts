/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import * as fromProjectsReducer from '../reducers';
import { ProjectsActions } from '../actions';
import { ProjectsSelectors } from '../selectors';
import { ProjectsService } from '@app/projects/projects.service';

@Injectable({ providedIn: 'root' })
export class ProjectsStoreFacade {
  public readonly projects$ = this.store.pipe(select(ProjectsSelectors.selectProjects));

  public readonly getProjectsSuccess$ = this.actions$.pipe(ofType(ProjectsActions.getProjectsSuccess));

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<fromProjectsReducer.State>,
    private _projectService: ProjectsService
  ) {}

  public getProjects() {
    this.store.dispatch(ProjectsActions.getProjects());
  }

  public createProject(project) {
    // this.store.dispatch(ProjectsActions.createProject(project));
    this._projectService.createProject(project);
  }

  public startProject(id: string, status: string) {
    // this.store.dispatch(ProjectsActions.createProject(project));
    this._projectService.startProject(id, status);
  }

  public removeProject(id: string) {
    // this.store.dispatch(ProjectsActions.createProject(project));
    this._projectService.removeProject(id);
  }

  public assignEmployee(id: string, employee: string) {
    this._projectService.assignEmployee(id, employee);
  }
}
