import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProjectsReducer from '../reducers';

export const projectsKey = 'projects';

export const selectFeature = createFeatureSelector<fromProjectsReducer.IProjectStore>(projectsKey);

export const selectProjects = createSelector(selectFeature, (state) => state.projects);
