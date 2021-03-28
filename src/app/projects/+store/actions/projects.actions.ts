import { IProject } from '@app/projects/interfaces';
import { createAction, props } from '@ngrx/store';

// API
export const getProjects = createAction('[Projects Module] Get Projects');
export const createProject = createAction('[Projects Module] Create Project', props<{ project }>());

// Successfully
export const getProjectsSuccess = createAction(
  '[Projects Module] Get Projects Success',
  props<{ projects: IProject[] }>()
);

// Failure
export const getProjectsFailure = createAction(
  '[Projects Module] Get Projects Failure',
  props<{ error: { message: string } }>()
);
