/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsStoreFacade } from '../+store/facades';
import { ProjectStatus } from '../enums';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { filter, takeUntil } from 'rxjs/operators';
import { EditProjectDialogComponent } from '../edit-project-dialog/edit-project-dialog.component';
import { EmployeesStoreFacade } from '@app/employees/+store/facades';
import { IEditDTO } from '../project-card/project-card.component';
import { IEmployee } from '@app/employees/interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projectStatus = ProjectStatus;
  projects$ = this._projectsStoreFacade.projects$;
  employees$ = this._employeesStoreFacade.employees$;
  employees: IEmployee[] = [];

  private _destroyed$ = new Subject<boolean>();

  constructor(
    private _projectsStoreFacade: ProjectsStoreFacade,
    private _dialog: MatDialog,
    private _employeesStoreFacade: EmployeesStoreFacade
  ) {}

  public ngOnInit(): void {
    this.employees$
      .pipe(takeUntil(this._destroyed$))
      .subscribe((employees) => (this.employees = employees.filter((employee) => employee.isInTheCompany)));
  }

  onCreateProject(): void {
    const dialogRef = this._dialog.open(CreateProjectDialogComponent, { disableClose: true });
    dialogRef
      .afterClosed()
      .pipe(filter((value) => !!value))
      .subscribe((project) => this._projectsStoreFacade.createProject(project));
  }

  onRemove(id: string): void {
    return this._projectsStoreFacade.removeProject(id);
  }

  onComplete(id: string): void {
    return this._projectsStoreFacade.startProject(id, this.projectStatus.COMPLETED);
  }

  onStart(id: string): void {
    return this._projectsStoreFacade.startProject(id, this.projectStatus.IN_PROGRESS);
  }

  onEdit(data: IEditDTO): void {
    const dialogRef = this._dialog.open(EditProjectDialogComponent, {
      data: { employees: this.employees },
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .pipe(filter((value) => !!value))
      .subscribe((value) => this._projectsStoreFacade.assignEmployee(data.id, data.name, value.employee));
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
