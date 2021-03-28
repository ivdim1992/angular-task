import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { IProject } from './interfaces';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private _fireStore: AngularFireDatabase) {}
  //   return this._fireStore.database.ref('projects').child('3').update({ name: 'updated' });

  getProjects(): Observable<IProject[]> {
    return this._fireStore.list('projects').valueChanges() as Observable<IProject[]>;
  }

  createProject(project) {
    const key = this._fireStore.createPushId();
    return this._fireStore.list('projects').set(key, {
      ...project,
      id: key,
      createdAt: moment(new Date(), 'YYYY-MM-DD').toString(),
    });
  }

  startProject(id: string, status: string): Promise<any> {
    return this._fireStore.list('projects').update(id, { status: status });
  }

  removeProject(id: string): Promise<any> {
    return this._fireStore.list('projects').remove(id);
  }

  assignEmployee(id: string, employee: string) {
    return this._fireStore.list('projects').update(id, { employees: [employee] });
  }
}
