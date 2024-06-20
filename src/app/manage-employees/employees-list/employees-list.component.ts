import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditMaintenanceComponent} from "../../manage-maintenance/edit-maintenance/edit-maintenance.component";
import {EmployeeService} from "../../services/employee.service";
import {MatTableDataSource} from "@angular/material/table";
import {DeleteModalComponent} from "../../modals/delete-modal/delete-modal.component";
import {Employee} from "../../models/employee";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";



@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','name', 'type', 'driverLiscence','email','actions'];
  dataSource!:  MatTableDataSource<Employee>;
  animal: string="";
  name: string="";
  search: boolean = false;
  constructor(public dialog: MatDialog , public employeeService: EmployeeService, ) {}
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.employeeService.getAll()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
    this.employeeService.delete(elem.id).subscribe(res => {
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
