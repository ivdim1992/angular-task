/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Component } from '@angular/core';
import { ProjectsStoreFacade } from '../+store/facades';
import { ProjectStatus } from '../enums';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { filter } from 'rxjs/operators';
import { EditProjectDialogComponent } from '../edit-project-dialog/edit-project-dialog.component';
import { EmployeesStoreFacade } from '@app/employees/+store/facades';
import { IEditDTO } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projectStatus = ProjectStatus;
  projects$ = this._projectsStoreFacade.projects$;
  employees$ = this._employeesStoreFacade.employees$;

  constructor(
    private _projectsStoreFacade: ProjectsStoreFacade,
    private _dialog: MatDialog,
    private _employeesStoreFacade: EmployeesStoreFacade
  ) {}

  onCreateProject(): void {
    const dialogRef = this._dialog.open(CreateProjectDialogComponent, { disableClose: true });
    dialogRef
      .afterClosed()
      .pipe(filter((value) => !!value))
      .subscribe((project) => {
        this._projectsStoreFacade.createProject(project);
      });
  }

  onRemove(id: string) {
    this._projectsStoreFacade.removeProject(id);
  }

  onComplete(id: string) {
    this._projectsStoreFacade.startProject(id, this.projectStatus.COMPLETED);
  }

  onStart(id: string) {
    this._projectsStoreFacade.startProject(id, this.projectStatus.IN_PROGRESS);
  }

  onEdit(data: IEditDTO) {
    const dialogRef = this._dialog.open(EditProjectDialogComponent, {
      data: { employees: this.employees$ },
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .pipe(filter((value) => !!value))
      .subscribe((value) => this._projectsStoreFacade.assignEmployee(data.id, data.name, value.employee));
  }
}
