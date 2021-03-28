import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from '../interfaces';

@Pipe({ name: 'projectStatus' })
export class ProjectStatusPipe implements PipeTransform {
  public transform(projects: IProject[], status: string) {
    return projects.filter((p) => p.status === status);
  }
}
