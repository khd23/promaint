import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {WarehouseService} from "../../services/warehouse.service";
import {DeleteModalComponent} from "../../modals/delete-modal/delete-modal.component";
import {Warehouse} from "../../models/warehouse";

@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.scss']
})
export class WarehousesListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','name','actions'];
  dataSource!:  MatTableDataSource<Warehouse>;
  search: boolean = false;
  tableLength: number = 0;
  constructor(public dialog: MatDialog , public warehouseService: WarehouseService, ) {}
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.warehouseService.getAll()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.tableLength = this.dataSource.data.length
      })
  }
  openDialog(name: string, elem: Warehouse): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {name: name, deleteFunction: () => this.deleteWarehousewarehouse(elem) },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log("deleted")

    });
  }
  deleteWarehousewarehouse(elem: Warehouse){
    // this.e.data = this.secretaries.data.splice(this.secretaries.data.indexOf(elem),1);
    this.warehouseService.delete(elem.id).subscribe(res => {
      this.refresh();
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
