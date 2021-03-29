import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectsActions } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectsService } from '@app/projects';

@Injectable()
export class ProjectsEffects {
  public getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.getProjects),
      switchMap(() =>
        this.projectService.getProjects().pipe(
          map((projects) => ProjectsActions.getProjectsSuccess({ projects })),
          catchError((error) => of(ProjectsActions.getProjectsFailure(error)))
        )
      )
    )
  );

  public createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.createProject),
      switchMap(({ project }) =>
        this.projectService.createProject(project).pipe(
          map((_) => ProjectsActions.createProjectSuccess()),
          catchError((error) => of(ProjectsActions.createProjectFailure(error)))
        )
      )
    )
  );

  public startProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.startProject),
      switchMap(({ id, status }) =>
        this.projectService.startProject(id, status).pipe(
          map((_) => ProjectsActions.startProjectSuccess()),
          catchError((error) => of(ProjectsActions.startProjectFailure(error)))
        )
      )
    )
  );

  public removeProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.removeProject),
      switchMap(({ id }) =>
        this.projectService.removeProject(id).pipe(
          map((_) => ProjectsActions.removeProjectSuccess()),
          catchError((error) => of(ProjectsActions.removeProjectFailure(error)))
        )
      )
    )
  );

  public assignEmployeeToProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.assignEmployeeToProject),
      switchMap(({ id, projectName, employee }) =>
        this.projectService.assignEmployee(id, projectName, employee).pipe(
          map((_) => ProjectsActions.assignEmployeeToProjectSuccess()),
          catchError((error) => of(ProjectsActions.assignEmployeeToProjectFailure(error)))
        )
      )
    )
  );

  constructor(private readonly projectService: ProjectsService, private readonly actions$: Actions) {}
}
