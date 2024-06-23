import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {InvCategory} from "../../models/inv-category";
import {MatDialog} from "@angular/material/dialog";
import {DeleteModalComponent} from "../../modals/delete-modal/delete-modal.component";
import {InvCategoryService} from "../../services/inv-category.service";

@Component({
  selector: 'app-inv-categories-list',
  templateUrl: './inv-categories-list.component.html',
  styleUrls: ['./inv-categories-list.component.scss']
})
export class InvCategoriesListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','name','actions'];
  dataSource!:  MatTableDataSource<InvCategory>;
  search: boolean = false;
  tableLength: number = 0;
  constructor(public dialog: MatDialog , public invCategoryService: InvCategoryService, ) {}
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.invCategoryService.getAll()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.tableLength = this.dataSource.data.length
      })
  }
  openDialog(name: string, elem: InvCategory): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {name: name, deleteFunction: () => this.deleteInvCategory(elem) },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log("deleted")

    });
  }
  deleteInvCategory(elem: InvCategory){
    // this.e.data = this.secretaries.data.splice(this.secretaries.data.indexOf(elem),1);
    this.invCategoryService.delete(elem.id).subscribe(res => {
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
