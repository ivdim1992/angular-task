import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectStatus } from '../enums';
import { IProject } from '../interfaces';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() project: IProject;
  @Output() editProject = new EventEmitter();
  @Output() startProject = new EventEmitter<string>();
  @Output() completeProject = new EventEmitter();
  @Output() removeProject = new EventEmitter();
  projectStatus = ProjectStatus;
}
