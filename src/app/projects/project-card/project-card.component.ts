import { Component, Input } from '@angular/core';
import { ProjectStatus } from '../enums';
import { IProject } from '../interfaces';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: IProject;
  projectStatus = ProjectStatus;
}
