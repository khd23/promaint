import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";
export interface Vendor {
  id:number;
  name: string;
  type: string;
  adress: string;
  contact: string;
}

const ELEMENT_DATA: Vendor[] = [
  { id: 25,name: 'Suzuki', type:"Fabricant", adress:"US",contact: "Amir amri" },
  { id: 27,name: 'Star', type:"Assurance ", adress:"TN",contact: "Ali saidi" },
  { id: 32,name: 'Mercedes Benz', type:"Fabricant", adress:"TN",contact: "Mohamed bouazizi" },
  { id: 33,name: 'Sany', type:"Fabricant", adress:"TN",contact: "Amer alaya" },
  { id: 34,name: 'J&R equipement', type:"Fabricant", adress:"WV",contact: "Anoir Chebbi" },


];

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss']
})
export class VendorsListComponent {
  displayedColumns: string[] = ['id','name', 'type', 'adress','contact'];
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
