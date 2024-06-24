import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Warehouse} from "../../models/warehouse";
import {Router} from "@angular/router";
import {WarehouseService} from "../../services/warehouse.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-add-iventory-warehouses-modal',
  templateUrl: './add-iventory-warehouses-modal.component.html',
  styleUrls: ['./add-iventory-warehouses-modal.component.scss']
})
export class AddIventoryWarehousesModalComponent {
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  successMessage :string='';
  error :string='';
  warehouses:Warehouse[]=[];

  constructor(  private router: Router , private warehouseService: WarehouseService,
                private _snackBar: MatSnackBar, private translateService: TranslateService){}

  ngOnInit(): void {
    this.warehouseService.getAll()
      .subscribe((data: any)=>{
        this.warehouses = data;

      })
    this.form = new FormGroup({
      qty: new FormControl('', [Validators.required]),
      unitCost: new FormControl('', [Validators.required]),
      reorderPoint: new FormControl('', [Validators.required]),
      reorderQty: new FormControl('', [Validators.required]),
      minQty: new FormControl('', [Validators.required]),
      maxQty: new FormControl('', [Validators.required]),
      warehouse: new FormControl('', [Validators.required]),



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
