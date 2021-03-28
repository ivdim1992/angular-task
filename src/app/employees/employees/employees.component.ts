import { Component, OnInit } from '@angular/core';
import { EmployeesStoreFacade } from '../+store/facades';

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
