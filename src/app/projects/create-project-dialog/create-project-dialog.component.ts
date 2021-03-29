/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss'],
})
export class CreateProjectDialogComponent implements OnInit {
  createProjectFrom: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<CreateProjectDialogComponent>
  ) {}

  ngOnInit(): void {
    this.createProjectFrom = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      price: this.formBuilder.control('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      status: this.formBuilder.control('', Validators.required),
    });
  }

  onCreate(): void {
    const value = this.createProjectFrom.value;
    this.dialogRef.close({
      name: value.name,
      price: Number(value.price),
      status: value.status,
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
