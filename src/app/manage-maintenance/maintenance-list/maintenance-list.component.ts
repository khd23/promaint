import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsModalComponent} from "../../manage-equipements/details-modal/details-modal.component";
import {EditMaintenanceComponent} from "../edit-maintenance/edit-maintenance.component";
export interface WorkOrder {
  id:number;
  code: string;
  total: number;
  technicien: string;
  status: string;
  progress: number;
  badge:string
}

const ELEMENT_DATA: WorkOrder[] = [
  { id: 14,code: 'E001', total:67.12, technicien:'Adel Drihmi',status: 'Ouvert', progress:0, badge:'badge-primary' },
  { id: 16,code: 'V021', total:25.52, technicien:'Ahmed Saadaoui',status: 'En progression', progress:45 ,badge:'badge-success' },


];
@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent {
  displayedColumns: string[] = ['id', 'code', 'total','technicien','status','progress','actions'];
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
