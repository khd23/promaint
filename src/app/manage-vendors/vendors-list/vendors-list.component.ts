import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";
import {MatTableDataSource} from "@angular/material/table";
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";
import {VendorService} from "../../services/vendor.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DeleteModalComponent} from "../../modals/delete-modal/delete-modal.component";
export interface Vendor {
  id:number;
  name: string;
  type: string;
  adress: string;
  contact: string;
}



@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss']
})
export class VendorsListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','firstName', 'lastName','type', 'address','contact','actions'];
  dataSource !: MatTableDataSource<Vendor>;
  animal: string="";
  name: string="";
  search: boolean = false;
  tableLength: number = 0;
  constructor(public dialog: MatDialog, public vendorService: VendorService) {}
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.vendorService.getAll()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.tableLength = this.dataSource.data.length
      })
  }
  openDialog(name: string, elem: Employee): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {name: name, deleteFunction: () => this.deleteEmployee(elem) },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log("deleted")

    });
  }
  deleteEmployee(elem: Employee){
    // this.e.data = this.secretaries.data.splice(this.secretaries.data.indexOf(elem),1);
    this.vendorService.delete(elem.id).subscribe(res => {
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
