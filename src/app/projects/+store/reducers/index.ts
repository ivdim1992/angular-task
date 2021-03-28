import * as fromRoot from '@app/+store/reducers';
import { createReducer, Action, on } from '@ngrx/store';
import { ProjectsActions } from '../actions';
import { IProject } from '../../interfaces';
import produce from 'immer';

export interface IProjectStore {
  projects: IProject[];
}

export const initialState: IProjectStore = {
  projects: [],
};

export interface State extends fromRoot.State {
  projects: IProjectStore;
}

const projectsReducers = createReducer(
  initialState,

  on(ProjectsActions.getProjectsSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.projects = action.projects;
    })
  )
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function reducer(state: IProjectStore | undefined, action: Action) {
  return projectsReducers(state, action);
}
