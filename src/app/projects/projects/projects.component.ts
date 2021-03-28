import { Component, OnInit } from '@angular/core';
import { ProjectsStoreFacade } from '../+store/facades';
import { ProjectStatus } from '../enums';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectStatus = ProjectStatus;
  projects$ = this._projectsStoreFacade.projects$;

  constructor(private _projectsStoreFacade: ProjectsStoreFacade) {}

  ngOnInit(): void {}
}
