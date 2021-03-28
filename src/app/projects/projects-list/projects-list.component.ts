import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../interfaces';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent {
  @Input() public projects: IProject[];
  @Input() public title: string;

  @Output() editProject = new EventEmitter();
  @Output() startProject = new EventEmitter<string>();
  @Output() completeProject = new EventEmitter();
  @Output() removeProject = new EventEmitter();
}
