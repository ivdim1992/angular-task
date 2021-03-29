import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesStoreModule } from './+store';
import { CreateEmployeeDialogComponent } from './create-employee-dialog/create-employee-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { MaterialModule } from '@app/resources/material';

@NgModule({
  declarations: [EmployeesComponent, CreateEmployeeDialogComponent, EmployeeCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    EmployeesStoreModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class EmployeesModule {}
