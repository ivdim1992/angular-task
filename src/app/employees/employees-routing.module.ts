import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesGuard } from './guards/employees.guard';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    canActivate: [EmployeesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
