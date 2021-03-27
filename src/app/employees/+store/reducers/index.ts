import * as fromRoot from '@app/+store/reducers';
import { createReducer, Action, on } from '@ngrx/store';
import { EmployeesActions } from '../actions';
import { IEmployee } from '../../interfaces';

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
  on(EmployeesActions.getEmployeesSuccess, (state, { employees }) => ({
    ...state,
    ...employees,
  }))

  //   on(fromActions.getUserCreationMetaSuccess, (state, { payload }) => ({
  //     ...state,
  //     loading: userCreationInfoInitialState.loading,
  //     ...payload
  //   })),

  //   on(VehicleListActions.getAggregatesSuccess, (state, action) =>
  //     produce(state, baseState => {
  //       baseState.aggregates = action.aggregates;
  //     })
  //   ),
  //   on(VehicleListActions.getVehicleTypesSuccess, (state, action) =>
  //     produce(state, baseState => {
  //       baseState.vehicleTypes = action.vehicleTypes;
  //     })
  //   ),
  //   on(VehicleListActions.getTerminalsSuccess, (state, action) =>
  //     produce(state, baseState => {
  //       baseState.terminals = action.terminals;
  //     })
  //   ),
  //   on(VehicleListActions.clearVehicleList, () => initialState)
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function reducer(state: IEmployeeStore | undefined, action: Action) {
  return employeesReducers(state, action);
}
