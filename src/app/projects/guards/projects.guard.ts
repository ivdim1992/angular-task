import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { ProjectsStoreFacade } from '../+store/facades';

@Injectable({ providedIn: 'root' })
export class ProjectsGuard implements CanActivate {
  constructor(private readonly projectsStoreFacade: ProjectsStoreFacade) {}

  public canActivate() {
    this.projectsStoreFacade.getProjects();

    return this.projectsStoreFacade.getProjectsSuccess$.pipe(
      take(1),
      map((_) => true)
    );
  }
}
