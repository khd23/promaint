import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";
import {InventoryService} from "../../services/inventory.service";
import {Inventory} from "../../models/inventory";
import {MatTableDataSource} from "@angular/material/table";
import {Vendor} from "../../manage-vendors/vendors-list/vendors-list.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DeleteModalComponent} from "../../modals/delete-modal/delete-modal.component";
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

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [ 'name', 'reference','description','unitType','category','actions'];
  dataSource!: MatTableDataSource<Vendor>;
  animal: string="";
  name: string="";
  search: boolean = false;
  tableLength: number = 0;

  constructor(public dialog: MatDialog, public inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.inventoryService.getAll()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.tableLength = this.dataSource.data.length
      })
  }
  openDialog(name: string, elem: Inventory): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {name: name, deleteFunction: () => this.delete(elem) },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log("deleted")

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(elem: Inventory){
    // this.e.data = this.secretaries.data.splice(this.secretaries.data.indexOf(elem),1);
    this.inventoryService.delete(elem.id).subscribe(res => {
      this.refresh();
    })
  }
}
