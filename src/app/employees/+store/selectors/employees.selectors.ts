import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEmployeesReducer from '../reducers';

export const employeesKey = 'employees';

export const selectFeature = createFeatureSelector<fromEmployeesReducer.IEmployeeStore>(employeesKey);

export const selectEmployees = createSelector(selectFeature, (state) => state.employees);
