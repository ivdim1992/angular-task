import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsStoreModule } from './+store';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { CalculateRevenuePipe, ProjectStatusPipe } from './pipes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectStatusPipe,
    ProjectCardComponent,
    CalculateRevenuePipe,
  ],
  imports: [CommonModule, ProjectsRoutingModule, ProjectsStoreModule, FlexLayoutModule, MatCardModule, MatButtonModule],
})
export class ProjectsModule {}
