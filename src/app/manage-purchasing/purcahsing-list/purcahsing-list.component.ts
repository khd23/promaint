import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";
export interface Purchasing {
  po:number;
  status: string;
  issued: string;
  vendor: string;
  buyer: string;
}

const ELEMENT_DATA: Purchasing[] = [
  { po: 127,status: 'Réquisition', issued:"12-23-2023", vendor:'Daves auto part',buyer: "Mohamed Ali Ferjani" },

];
@Component({
  selector: 'app-purcahsing-list',
  templateUrl: './purcahsing-list.component.html',
  styleUrls: ['./purcahsing-list.component.scss']
})
export class PurcahsingListComponent {
  displayedColumns: string[] = ['po','status', 'issued', 'vendor','buyer'];
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
