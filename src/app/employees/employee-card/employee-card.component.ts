import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployee } from '../interfaces';

export interface IEditEmployeeDTO {
  id: string;
  firstName: string;
  lastName: string;
  isInTheCompany: boolean;
}

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  @Input() employee: IEmployee;
  @Output() removeEmployee = new EventEmitter<string>();
  @Output() editEmployee = new EventEmitter<IEditEmployeeDTO>();
}
