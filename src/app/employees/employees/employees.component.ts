/* eslint-disable @typescript-eslint/no-misused-promises */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { EmployeesStoreFacade } from '../+store/facades';
import { CreateEmployeeDialogComponent } from '../create-employee-dialog/create-employee-dialog.component';
import { IEditEmployeeDTO } from '../employee-card/employee-card.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  employees$ = this._employeesStoreFacade.employees$;

  constructor(private _employeesStoreFacade: EmployeesStoreFacade, private _dialog: MatDialog) {}

  onCreateEmployee(): void {
    const dialogRef = this._dialog.open(CreateEmployeeDialogComponent, { data: { isEdit: false }, disableClose: true });
    dialogRef
      .afterClosed()
      .pipe(filter((value) => !!value))
      .subscribe((employee) => this._employeesStoreFacade.createEmployee(employee));
  }

  onRemoveEmployee(id: string): void {
    return this._employeesStoreFacade.removeEmployee(id);
  }

  onEditEmployee(data: IEditEmployeeDTO): void {
    const dialogRef = this._dialog.open(CreateEmployeeDialogComponent, {
      data: { isEdit: true, employee: data },
      disableClose: true,
    });
    dialogRef
      .afterClosed()
      .pipe(filter((value) => !!value))
      .subscribe((employee) => {
        return this._employeesStoreFacade.updateEmployee(data.id, employee);
      });
  }
}
