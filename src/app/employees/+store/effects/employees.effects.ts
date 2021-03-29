/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesService } from '../../employees.service';
import { EmployeesActions } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EmployeesEffects {
  public getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.getEmployees),
      switchMap(() =>
        this.employeesService.getEmployees().pipe(
          map((employees) => EmployeesActions.getEmployeesSuccess({ employees })),
          catchError((error) => of(EmployeesActions.getEmployeesFailure(error)))
        )
      )
    )
  );

  public addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.addEmployee),
      switchMap(({ employee }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        return this.employeesService.createEmployee(employee).pipe(
          map((_) => EmployeesActions.addEmployeeSuccess()),
          catchError((error) => of(EmployeesActions.addEmployeeFailure(error)))
        );
      })
    )
  );

  public removeEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.removeEmployee),
      switchMap(({ id }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        return this.employeesService.removeEmployee(id).pipe(
          map((_) => EmployeesActions.removeEmployeeSuccess()),
          catchError((error) => of(EmployeesActions.removeEmployeeFailure(error)))
        );
      })
    )
  );

  public updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.updateEmployee),
      switchMap(({ id, employee }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        return this.employeesService.editEmployee(id, employee).pipe(
          map((_) => EmployeesActions.updateEmployeeSuccess()),
          catchError((error) => of(EmployeesActions.updateEmployeeFailure(error)))
        );
      })
    )
  );

  constructor(private readonly employeesService: EmployeesService, private readonly actions$: Actions) {}
}
