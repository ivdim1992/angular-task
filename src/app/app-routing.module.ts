import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employees',
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
