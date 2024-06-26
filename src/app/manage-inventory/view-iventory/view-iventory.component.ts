import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Vendor} from "../../models/vendor";
import {VENDOR_TYPE} from "../../consts/vendorType";
import {PAYMENT_TYPE} from "../../consts/paymentType";
import {VendorService} from "../../services/vendor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Inventory} from "../../models/inventory";
import {InventoryService} from "../../services/inventory.service";
import {inventoryVendorsReducer} from "../../ng-rx/reducers/inventory-vendors..reducer";
import {InventoryVendor} from "../../models/inventory-vendor";
import {InventoryWarehouse} from "../../models/inventory-warehouse";
import {InvVendorService} from "../../services/inv-vendor.service";
import {InvWarehouseService} from "../../services/inv-warehouse.service";

@Component({
  selector: 'app-view-iventory',
  templateUrl: './view-iventory.component.html',
  styleUrls: ['./view-iventory.component.scss']
})
export class ViewIventoryComponent {
  id!: number;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  inventory! : Inventory;
  error: any;
  types= VENDOR_TYPE;
  paymentTypes= PAYMENT_TYPE;
  type!:string;
  inventoryVendors: InventoryVendor[]=[];
  inventoryWarehouses:  InventoryWarehouse[]=[];
  constructor( public inventoryService: InventoryService, private router: Router,
               private _snackBar: MatSnackBar,  private route: ActivatedRoute,
               public invVendorService: InvVendorService ,  public invWarehouseService: InvWarehouseService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.inventoryService.find(this.id).subscribe((data: any)=>{
      this.inventory = data;

    });
    this.invVendorService.getAllByInventory(this.id).subscribe((data: any)=>{
      this.inventoryVendors = data;

    });

    this.invWarehouseService.getAllByInventory(this.id).subscribe((data: any)=>{
      this.inventoryWarehouses = data;

    });
  }


  /**
   * Write code on Method
   *
   * @return response()
   */


}
