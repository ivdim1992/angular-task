import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../interfaces';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  @Input() public projects: IProject[];
  @Input() public title: string;

  public ngOnInit(): void {}
}
