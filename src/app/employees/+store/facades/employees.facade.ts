/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import * as fromEmployeesReducer from '../reducers';
import { EmployeesActions } from '../actions';
import { EmployeesSelectors } from '../selectors';
import { IEmployee } from '@app/employees/interfaces';

@Injectable({ providedIn: 'root' })
export class EmployeesStoreFacade {
  public readonly employees$ = this.store.pipe(select(EmployeesSelectors.selectEmployees));

  public readonly getEmployeesSuccess$ = this.actions$.pipe(ofType(EmployeesActions.getEmployeesSuccess));

  constructor(private readonly actions$: Actions, private readonly store: Store<fromEmployeesReducer.State>) {}

  public getEmployees() {
    this.store.dispatch(EmployeesActions.getEmployees());
  }

  public createEmployee(employee: IEmployee) {
    this.store.dispatch(EmployeesActions.addEmployee({ employee }));
  }

  public removeEmployee(id: string) {
    this.store.dispatch(EmployeesActions.removeEmployee({ id }));
  }

  public updateEmployee(id: string, employee: IEmployee) {
    this.store.dispatch(EmployeesActions.updateEmployee({ id, employee }));
  }
}
