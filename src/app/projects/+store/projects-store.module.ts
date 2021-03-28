import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './effects';
import { projectsKey } from './selectors/projects.selectors';

@NgModule({
  imports: [StoreModule.forFeature(projectsKey, reducer), EffectsModule.forFeature([ProjectsEffects])],
})
export class ProjectsStoreModule {}
