import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";

export interface Employee {
  id:number;
  name: string;
  type: string;
  driverLiscence:  number;
  contact: string;
}

const ELEMENT_DATA: Employee[] = [
  { id: 25,name: 'Adel Drihmi', type:"Technicien", driverLiscence:9548326,contact: "adel.drihmi@gmail.com" },
  { id: 25,name: 'Ahmed Saadaoui', type:"Technicien", driverLiscence:5896341,contact: "ahmed.saadaoui5@gmail.com" },
  { id: 25,name: 'Mohamed Ali Ferjani', type:"Manager", driverLiscence:2587465,contact: "medali.ferjani@gmail.com" },
  { id: 25,name: 'Mohamed Omri', type:"Chauffeur", driverLiscence:3214789,contact: "mohamed.omri@gmail.com" },


];
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  displayedColumns: string[] = ['id','name', 'type', 'driverLiscence','contact'];
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
