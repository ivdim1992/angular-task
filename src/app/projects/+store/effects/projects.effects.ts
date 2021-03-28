import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectsActions } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectsService } from '@app/projects/projects.service';

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

  constructor(private readonly projectService: ProjectsService, private readonly actions$: Actions) {}
}
