import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesEffects } from './effects';
import { employeesKey } from './selectors/employees.selectors';

@NgModule({
  imports: [StoreModule.forFeature(employeesKey, reducer), EffectsModule.forFeature([EmployeesEffects])],
})
export class EmployeesStoreModule {}
