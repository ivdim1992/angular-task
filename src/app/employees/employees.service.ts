import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IEditEmployeeDTO } from './employee-card/employee-card.component';
import { IEmployee } from './interfaces';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private _fireStore: AngularFireDatabase) {}

  getEmployees(): Observable<IEmployee[]> {
    return this._fireStore.list('employees').valueChanges() as Observable<IEmployee[]>;
  }

  createEmployee(employee: IEmployee) {
    const key = this._fireStore.createPushId();
    return this._fireStore.list('employees').set(key, {
      ...employee,
      id: key,
    });
  }

  removeEmployee(id: string): Promise<any> {
    return this._fireStore.list('employees').remove(id);
  }

  editEmployee(id: string, employee: IEditEmployeeDTO) {
    return this._fireStore.list('employees').update(id, employee);
  }
}
