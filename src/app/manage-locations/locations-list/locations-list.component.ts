import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeLocation} from "../../models/location";
import {MatDialog} from "@angular/material/dialog";
import {DeleteModalComponent} from "../../modals/delete-modal/delete-modal.component";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','name','actions'];
  dataSource!:  MatTableDataSource<EmployeeLocation>;
  search: boolean = false;
  tableLength: number = 0;
  constructor(public dialog: MatDialog , public locationService: LocationService, ) {}
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.locationService.getAll()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.tableLength = this.dataSource.data.length
      })
  }
  openDialog(name: string, elem: EmployeeLocation): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {name: name, deleteFunction: () => this.deleteEmployeeLocation(elem) },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log("deleted")

    });
  }
  deleteEmployeeLocation(elem: EmployeeLocation){
    // this.e.data = this.secretaries.data.splice(this.secretaries.data.indexOf(elem),1);
    this.locationService.delete(elem.id).subscribe(res => {
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
