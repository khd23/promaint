import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";
export interface Part {
  ref:string;
  name: string;
  category: string;
  vendor: string;
  qte: number;
  unitCost: number;
  po:number
}

// @ts-ignore
const ELEMENT_DATA: Part[] = [
  { ref: 'KJH123',name: 'Filtre à huile', category:'Filtre', vendor:'SUZUKI',qte: 230, unitCost:75, po:120 },
  { ref: 'CJP2',name: 'Vérin à broches/double effet, simple tige', category:'Vérin', vendor:'AIRTEC',qte: 23, unitCost:54, po:123 },
  { ref: 'KH569',name: 'Cylindre de guidage compact', category:'Compact', vendor:'Warren cat',qte: 230, unitCost:64, po:120 },
  { ref: 'OUI987',name: 'Plaquettes de frein', category:'Frein', vendor:'Daves auto part',qte: 50, unitCost:56.72, po:127 },
  { ref: 'NH895',name: 'Fluide hydraulique', category:'Fluide', vendor:'',qte: 30, unitCost:4.2, po:131 },
  { ref: 'FL2584',name: 'Air filtre', category:'Filtre', vendor:'J&R equipement',qte: 91, unitCost:20.47, po:120 },

];
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent {

  displayedColumns: string[] = ['ref', 'name', 'category','vendor','qte','unitCost','po'];
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
