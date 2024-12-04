import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrl: './edit-bookmark.component.scss'
})
export class EditBookmarkComponent {

  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; date: Date }
  ) {
    this.editForm = this.fb.group({
      title: [data.title, [Validators.required, Validators.maxLength(70)]],
      link: [data.date, [Validators.required]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }
}
