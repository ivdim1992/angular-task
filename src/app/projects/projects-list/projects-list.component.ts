import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../interfaces';
import { IEditDTO } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent {
  @Input() public projects: IProject[];
  @Input() public title: string;

  @Output() editProject = new EventEmitter<IEditDTO>();
  @Output() startProject = new EventEmitter<string>();
  @Output() completeProject = new EventEmitter<string>();
  @Output() removeProject = new EventEmitter<string>();
}
