import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IEmployee } from './interfaces';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private _fireStore: AngularFirestore) {}
  tutorialsRef: AngularFirestoreCollection<IEmployee>;

  getEmployees(): Observable<any[]> {
    return this._fireStore.collection('employees').valueChanges();
  }

  addEmployee(employee: IEmployee): Promise<any> {
    return this._fireStore.collection('employees').add(employee);
  }

  editEmployee(employee: IEmployee): Promise<void> {
    return this.tutorialsRef.doc(employee.id).update(employee);
  }
}
