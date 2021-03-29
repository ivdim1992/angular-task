/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmployee } from '@app/employees/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
  styleUrls: ['./edit-project-dialog.component.scss'],
})
export class EditProjectDialogComponent implements OnInit {
  assignEmployeeFrom: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employees: Observable<IEmployee[]> }
  ) {}

  ngOnInit(): void {
    this.assignEmployeeFrom = this.formBuilder.group({
      employee: this.formBuilder.control('', [Validators.required]),
    });
  }

  onAssign(): void {
    const value = this.assignEmployeeFrom.value;
    this.dialogRef.close({
      employee: value.employee,
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
