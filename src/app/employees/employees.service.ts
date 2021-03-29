import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import { IEditEmployeeDTO } from './employee-card/employee-card.component';
import { IEmployee } from './interfaces';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private _fireBase: AngularFireDatabase) {}

  getEmployees(): Observable<IEmployee[]> {
    return this._fireBase.list('employees').valueChanges() as Observable<IEmployee[]>;
  }

  createEmployee(employee: IEmployee): Observable<void> {
    const key = this._fireBase.createPushId();
    const request: Promise<void> = this._fireBase.list('employees').set(key, {
      ...employee,
      id: key,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return from(request);
  }

  removeEmployee(id: string): Observable<void> {
    const request: Promise<void> = this._fireBase.list('employees').remove(id);
    return from(request);
  }

  editEmployee(id: string, employee: IEditEmployeeDTO): Observable<void> {
    const request: Promise<void> = this._fireBase.list('employees').update(id, employee);
    return from(request);
  }
}
