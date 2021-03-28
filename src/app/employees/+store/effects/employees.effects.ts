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

  constructor(private readonly employeesService: EmployeesService, private readonly actions$: Actions) {}
}
