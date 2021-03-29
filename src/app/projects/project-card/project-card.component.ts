import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { ProjectStatus } from '../enums';
import { IProject } from '../interfaces';

export interface IEditDTO {
  id: string;
  name: string;
}
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() project: IProject;
  @Output() editProject = new EventEmitter<IEditDTO>();
  @Output() startProject = new EventEmitter<string>();
  @Output() completeProject = new EventEmitter<string>();
  @Output() removeProject = new EventEmitter<string>();

  projectStatus = ProjectStatus;

  yearsInInThePast(): boolean {
    const pastYears = moment(new Date(), 'YYYY-MM-DD').diff(new Date(this.project.createdAt), 'years');
    return pastYears > 5 ? true : false;
  }
}
