import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { EmployeesStoreFacade } from '@app/employees/+store/facades';
import { forkJoin } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProjectsStoreFacade } from '../+store/facades';

@Injectable({ providedIn: 'root' })
export class ProjectsGuard implements CanActivate {
  constructor(
    private readonly projectsStoreFacade: ProjectsStoreFacade,
    private readonly employeeStoreFacade: EmployeesStoreFacade
  ) {}

  public canActivate() {
    this.projectsStoreFacade.getProjects();
    this.employeeStoreFacade.getEmployees();

    return forkJoin([
      this.projectsStoreFacade.getProjectsSuccess$.pipe(take(1)),
      this.employeeStoreFacade.getEmployeesSuccess$.pipe(take(1)),
    ]).pipe(
      take(1),
      map((_) => true)
    );
  }
}
