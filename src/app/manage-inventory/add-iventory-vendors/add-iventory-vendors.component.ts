import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {InvCategory} from "../../models/inv-category";
import {UNIT_TYPE} from "../../consts/unitType";
import {Router} from "@angular/router";
import {InvCategoryService} from "../../services/inv-category.service";
import {TranslateService} from "@ngx-translate/core";
import {InventoryService} from "../../services/inventory.service";
import {Inventory} from "../../models/inventory";
import {Warehouse} from "../../models/warehouse";
import {WarehouseService} from "../../services/warehouse.service";
import {Vendor} from "../../models/vendor";
import {VendorService} from "../../services/vendor.service";

@Component({
  selector: 'app-add-iventory-vendors',
  templateUrl: './add-iventory-vendors.component.html',
  styleUrls: ['./add-iventory-vendors.component.scss']
})
export class AddIventoryVendorsComponent {
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  successMessage :string='';
  error :string='';
  vendors:Vendor[]=[];
  dataSource!: any[] ;
  constructor(  private router: Router , private vendorService: VendorService,
                private _snackBar: MatSnackBar, private translateService: TranslateService){}

  ngOnInit(): void {
    this.vendorService.getAll()
      .subscribe((data: any)=>{
        this.vendors = data;

      })
    this.form = new FormGroup({
      barCode: new FormControl('', [Validators.required]),
      vendorPart: new FormControl('', [Validators.required]),
      vendor: new FormControl('', [Validators.required]),




    });
  }
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */

}
