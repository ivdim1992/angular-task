import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesStoreModule } from './+store';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule, EmployeesStoreModule],
})
export class EmployeesModule {}
