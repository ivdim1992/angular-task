import { IProject } from '@app/projects/interfaces';
import { createAction, props } from '@ngrx/store';

// API
export const getProjects = createAction('[Projects Module] Get Projects');
export const createProject = createAction('[Projects Module] Create Project', props<{ project: IProject }>());
export const startProject = createAction('[Projects Module] Start Project', props<{ id: string; status: string }>());
export const removeProject = createAction('[Projects Module] Remove Project', props<{ id: string }>());
export const assignEmployeeToProject = createAction(
  '[Projects Module] Assign Employee To Project',
  props<{ id: string; projectName: string; employee: { id: string; name: string } }>()
);

// Successfully
export const getProjectsSuccess = createAction(
  '[Projects Module] Get Projects Success',
  props<{ projects: IProject[] }>()
);

export const createProjectSuccess = createAction('[Projects Module] Create Project Success');
export const startProjectSuccess = createAction('[Projects Module] Start Project Success');
export const removeProjectSuccess = createAction('[Projects Module] Remove Project Success');
export const assignEmployeeToProjectSuccess = createAction('[Projects Module] Assign Employee To Project Success');

// Failure
export const getProjectsFailure = createAction(
  '[Projects Module] Get Projects Failure',
  props<{ error: { message: string } }>()
);

export const createProjectFailure = createAction(
  '[Projects Module] Create Project Failure',
  props<{ error: { message: string } }>()
);

export const startProjectFailure = createAction(
  '[Projects Module] Start Project Failure',
  props<{ error: { message: string } }>()
);

export const removeProjectFailure = createAction(
  '[Projects Module] Remove Project Failure',
  props<{ error: { message: string } }>()
);

export const assignEmployeeToProjectFailure = createAction(
  '[Projects Module] Assign Employee To Project Failure',
  props<{ error: { message: string } }>()
);
