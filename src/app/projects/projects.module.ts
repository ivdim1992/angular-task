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
import { CreateProjectDialogComponent } from './create-project-dialog/create-project-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditProjectDialogComponent } from './edit-project-dialog/edit-project-dialog.component';
import { MaterialModule } from '@app/resources/material';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectStatusPipe,
    ProjectCardComponent,
    CalculateRevenuePipe,
    CreateProjectDialogComponent,
    EditProjectDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ProjectsRoutingModule,
    ProjectsStoreModule,
    FlexLayoutModule,
    MatCardModule,
    MaterialModule,
  ],
})
export class ProjectsModule {}
