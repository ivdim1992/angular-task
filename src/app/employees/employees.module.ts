import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesStoreModule } from './+store';
import { MatButtonModule } from '@angular/material/button';
import { CreateEmployeeDialogComponent } from './create-employee-dialog/create-employee-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@NgModule({
  declarations: [EmployeesComponent, CreateEmployeeDialogComponent, EmployeeCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    EmployeesStoreModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
  ],
})
export class EmployeesModule {}
