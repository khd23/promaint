import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";


export interface Purchasing {
  id:number;
  status: string;
  issued: string;
  customer: string;
  total: number;
  payements:number;
}

const ELEMENT_DATA: Purchasing[] = [
  { id: 23,status: 'Impayée', issued:"12-23-2023", customer:'Daves auto part',total: 234.16,payements:180 },

];
@Component({
  selector: 'app-invoces-list',
  templateUrl: './invoces-list.component.html',
  styleUrls: ['./invoces-list.component.scss']
})
export class InvocesListComponent {
  displayedColumns: string[] = ['id','status', 'issued', 'customer','total','payements'];
  dataSource = ELEMENT_DATA;
  animal: string="";
  name: string="";
  search: boolean = false;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditMaintenanceComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
