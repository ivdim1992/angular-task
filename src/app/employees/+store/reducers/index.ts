import * as fromRoot from '@app/+store/reducers';
import { createReducer, Action, on } from '@ngrx/store';
import { EmployeesActions } from '../actions';
import { IEmployee } from '../../interfaces';
import produce from 'immer';

export interface IEmployeeStore {
  employees: IEmployee[];
}

export const initialState: IEmployeeStore = {
  employees: [],
};

export interface State extends fromRoot.State {
  employees: IEmployeeStore;
}

const employeesReducers = createReducer(
  initialState,

  on(EmployeesActions.getEmployeesSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.employees = action.employees;
    })
  )
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function reducer(state: IEmployeeStore | undefined, action: Action) {
  return employeesReducers(state, action);
}
