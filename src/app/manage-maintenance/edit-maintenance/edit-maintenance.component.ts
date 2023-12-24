import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-edit-maintenance',
  templateUrl: './edit-maintenance.component.html',
  styleUrls: ['./edit-maintenance.component.scss']
})
export class EditMaintenanceComponent {
  constructor(
    public dialogRef: MatDialogRef<EditMaintenanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
