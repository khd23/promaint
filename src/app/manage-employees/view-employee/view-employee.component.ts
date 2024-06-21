import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Employee} from "../../models/employee";
import {ROLES} from "../../consts/roles";
import {STATUS} from "../../consts/status";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent {
  id!: number;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  employee! : Employee
  error: any;
  roles= ROLES;
  status!:string;
  type!:string;
  constructor( public employeeService: EmployeeService, private router: Router,private _snackBar: MatSnackBar,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.find(this.id).subscribe((data: Employee)=>{
      this.employee = data;
      if(this.employee != null) {
        switch (this.employee.status) {
          case "ACTIVE":
            this.status = "status.active"
            break;
          case "INACTIVE":
            this.status = "status.inactive"
            break;
          case "REQUESTOR":
            this.status = "status.requestor"
            break;
          default:
            this.status = ""
            break;
        }
        switch (this.employee.type) {
          case "MANAGER":
            this.type = "roles.manager"
            break;
          case "TECHNICIAN":
            this.type = "roles.technician"
            break;
          case "DRIVER":
            this.type = "roles.driver"
            break;
          default:
            this.type = ""
            break;
        }
      }

    });

  }


  /**
   * Write code on Method
   *
   * @return response()
   */

}
