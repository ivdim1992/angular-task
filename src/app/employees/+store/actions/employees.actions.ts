import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../../interfaces';

// API
export const getEmployees = createAction('[Employees Module] Get Employees');
export const addEmployee = createAction('[Employees Module] Add Employee', props<{ employee: IEmployee }>());
export const updateEmployee = createAction(
  '[Employees Module] Update Employee',
  props<{ id: string; employee: IEmployee }>()
);
export const removeEmployee = createAction('[Employees Module] Remove Employee', props<{ id: string }>());

// Successfully
export const getEmployeesSuccess = createAction(
  '[Employees Module] Get Employees Success',
  props<{ employees: IEmployee[] }>()
);
export const addEmployeeSuccess = createAction('[Employees Module] Add Employees Success');
export const updateEmployeeSuccess = createAction('[Employees Module] Update Employees Success');
export const removeEmployeeSuccess = createAction('[Employees Module] Remove Employees Success');

// Failure
export const getEmployeesFailure = createAction(
  '[Employees Module] Get Employees Failure',
  props<{ error: { message: string } }>()
);

export const addEmployeeFailure = createAction(
  '[Employees Module] Add Employee Failure',
  props<{ error: { message: string } }>()
);

export const updateEmployeeFailure = createAction(
  '[Employees Module] Update Employees Failure',
  props<{ error: { message: string } }>()
);

export const removeEmployeeFailure = createAction(
  '[Employees Module] Remove Employees Failure',
  props<{ error: { message: string } }>()
);
