/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import * as fromEmployeesReducer from '../reducers';
import { EmployeesActions } from '../actions';
import { EmployeesSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class EmployeesStoreFacade {
  public readonly employees$ = this.store.pipe(select(EmployeesSelectors.selectEmployees));

  public readonly getVehiclesSuccess$ = this.actions$.pipe(ofType(EmployeesActions.getEmployeesSuccess));

  constructor(private readonly actions$: Actions, private readonly store: Store<fromEmployeesReducer.State>) {}

  public getEmployees() {
    this.store.dispatch(EmployeesActions.getEmployees());
  }

  //   public getVehiclesAggregates() {
  //     this.store.dispatch(VehicleListActions.getAggregates());
  //   }

  //   public getVehicleTypes() {
  //     this.store.dispatch(VehicleListActions.getVehicleTypes());
  //   }

  //   public getTerminals() {
  //     this.store.dispatch(VehicleListActions.getTerminals());
  //   }

  //   public clear() {
  //     this.store.dispatch(VehicleListActions.clearVehicleList());
  //   }
}
