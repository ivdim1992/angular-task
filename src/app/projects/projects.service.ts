import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IProject } from './interfaces';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private _fireStore: AngularFireDatabase) {}
  //   return this._fireStore.database.ref('projects').child('3').update({ name: 'updated' });

  getProjects(): Observable<IProject[]> {
    return this._fireStore.list('projects').valueChanges() as Observable<IProject[]>;
  }

  // addEmployee(employee: IEmployee): Promise<any> {
  //   return this._fireStore.collection('employees').add(employee);
  // }

  // editEmployee(employee: IEmployee): Promise<void> {
  //   return this.tutorialsRef.doc(employee.id).update(employee);
  // }
}
