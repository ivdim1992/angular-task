/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEditEmployeeDTO } from '../employee-card/employee-card.component';

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['./create-employee-dialog.component.scss'],
})
export class CreateEmployeeDialogComponent implements OnInit {
  createEmployeeForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<CreateEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isEdit: boolean; employee: IEditEmployeeDTO }
  ) {}

  ngOnInit(): void {
    this.createEmployeeForm = this.formBuilder.group({
      firstName: this.formBuilder.control(this.data.isEdit ? this.data.employee.firstName : '', [Validators.required]),
      lastName: this.formBuilder.control(this.data.isEdit ? this.data.employee.lastName : '', [Validators.required]),
      isInTheCompany: this.formBuilder.control(
        this.data.isEdit ? this.data.employee.isInTheCompany : '',
        Validators.required
      ),
    });
  }

  onCreate() {
    const value = this.createEmployeeForm.value;
    this.dialogRef.close({
      firstName: value.firstName,
      lastName: value.lastName,
      name: `${value.firstName} ${value.lastName}`,
      isInTheCompany: value.isInTheCompany,
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
