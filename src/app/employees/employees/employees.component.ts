import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesStoreFacade } from '../+store/facades/employees.facade';
import { IEmployee } from '../interfaces';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees$ = this._employeesStoreFacade.employees$;

  constructor(private _employeesStoreFacade: EmployeesStoreFacade) {}

  ngOnInit(): boolean {
    return true;
  }
}
