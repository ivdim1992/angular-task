/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment';
import { from, Observable } from 'rxjs';
import { IProject } from './interfaces';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private _fireStore: AngularFireDatabase) {}

  getProjects(): Observable<IProject[]> {
    return this._fireStore.list('projects').valueChanges() as Observable<IProject[]>;
  }

  createProject(project: IProject): Observable<void> {
    const key = this._fireStore.createPushId();
    const request: Promise<void> = this._fireStore.list('projects').set(key, {
      ...project,
      id: key,
      createdAt: moment(new Date(), 'YYYY-MM-DD').toString(),
    });

    return from(request);
  }

  startProject(id: string, status: string): Observable<void> {
    const request: Promise<void> = this._fireStore.list('projects').update(id, { status: status });
    return from(request);
  }

  removeProject(id: string): Observable<void> {
    const request: Promise<void> = this._fireStore.list('projects').remove(id);
    return from(request);
  }

  assignEmployee(id: string, projectName: string, employee: { id: string; name: string }): Observable<void> {
    const request: Promise<void> = this._fireStore
      .list('employees')
      .update(employee.id, { projects: [projectName] })
      .then((_) => {
        return this._fireStore.list('projects').update(id, { employees: [employee.name] });
      })
      .catch((err) => console.log(err));
    return from(request);
  }
}
