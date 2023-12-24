import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsModalComponent} from "../../manage-equipements/details-modal/details-modal.component";

export interface Equipement {
  code: string;
  date: string;
  type: string;
  brand: string;
  mh: string;
  serial: string;
  ref: string;
  status: string;
  badge: string;
  progress:number
}

const ELEMENT_DATA: Equipement[] = [
  { code: 'E001', date: '2001', type: 'Plieuse',brand:'NESTA', mh: '242 hr', serial: 'SMPH00123', ref: '32-856', status: 'Entretien depassé', badge:'badge-danger',progress:0 },
  { code: 'E002', date: '2012', type: 'Cintreuse',brand:'NESTA', mh: '150 hr', serial:'KHJU58468', ref: '45-256', status: 'Entrtien proche', badge:'badge-success',progress:0  },
  { code: 'E003', date: '2003', type: 'Poste sodure',brand:'EGM', mh: '35 hr', serial: 'MJIO45698', ref: '85-665', status: 'encours', badge:'',progress:25  },
  { code: 'C004', date: '2015', type: 'Camion', brand:'MERCEDES',mh: '12500 km', serial: 'ABHI58423', ref: 'YWG-125', status: 'Ordre de réparation', badge:'badge-primary',progress:0  },
  { code: 'V005', date: '2018', type: 'Voiture',brand:'VW', mh: '7500 km', serial: 'LOKJ14569', ref: 'YWG-256', status: 'encours', badge:'',progress:45  },

];
@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.scss']
})
export class AddMaintenanceComponent {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  displayedColumns: string[] = ['code', 'date', 'type','brand', 'ref','actions'];
  dataSource = ELEMENT_DATA;
  animal: string="";
  name: string="";
  search: boolean = false;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
}

}
