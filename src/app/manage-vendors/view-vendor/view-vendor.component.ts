import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Employee} from "../../models/employee";
import {ROLES} from "../../consts/roles";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {VendorService} from "../../services/vendor.service";
import {Vendor} from "../../models/vendor";
import {VENDOR_TYPE} from "../../consts/vendorType";
import {PAYMENT_TYPE} from "../../consts/paymentType";

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent {
  id!: number;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   vendor! : Vendor;
  error: any;
  types= VENDOR_TYPE;
  paymentTypes= PAYMENT_TYPE;
  type!:string;
  constructor( public vendorService: VendorService, private router: Router,private _snackBar: MatSnackBar,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorService.find(this.id).subscribe((data: Vendor)=>{
      this.vendor = data;
      // if(this.vendor != null) {
      //   switch (this.vendor.paymentType) {
      //     case "ACTIVE":
      //       this.status = "status.active"
      //       break;
      //     case "INACTIVE":
      //       this.status = "status.inactive"
      //       break;
      //     case "REQUESTOR":
      //       this.status = "status.requestor"
      //       break;
      //     default:
      //       this.status = ""
      //       break;
      //   }
      //   switch (this.employee.type) {
      //     case "MANAGER":
      //       this.type = "roles.manager"
      //       break;
      //     case "TECHNICIAN":
      //       this.type = "roles.technician"
      //       break;
      //     case "DRIVER":
      //       this.type = "roles.driver"
      //       break;
      //     default:
      //       this.type = ""
      //       break;
      //   }
      // }

    });

  }


  /**
   * Write code on Method
   *
   * @return response()
   */

}
