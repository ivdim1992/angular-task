import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { EmployeesStoreFacade } from '../+store/facades/employees.facade';

@Injectable({ providedIn: 'root' })
export class EmployeesGuard implements CanActivate {
  constructor(private readonly employeeStoreFacade: EmployeesStoreFacade) {}

  public canActivate() {
    this.employeeStoreFacade.getEmployees();

    return this.employeeStoreFacade.getEmployeesSuccess$.pipe(
      take(1),
      map((_) => true)
    );
  }
}
