import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Warehouse} from "../../models/warehouse";
import {ActivatedRoute, Router} from "@angular/router";
import {WarehouseService} from "../../services/warehouse.service";
import {TranslateService} from "@ngx-translate/core";
import {InvWarehouseService} from "../../services/inv-warehouse.service";
import {InventoryWarehouse} from "../../models/inventory-warehouse";
import {InventoryService} from "../../services/inventory.service";
import {Inventory} from "../../models/inventory";

@Component({
  selector: 'app-add-iventory-warehouses',
  templateUrl: './add-iventory-warehouses.component.html',
  styleUrls: ['./add-iventory-warehouses.component.scss']
})
export class AddIventoryWarehousesComponent {
  id!: number;
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  successMessage :string='';
  error :string='';
  warehouses:Warehouse[]=[];
  inventory!:Inventory;
  inventoryWarehouse!:InventoryWarehouse;

  constructor(  private router: Router , private warehouseService: WarehouseService,private inventoryService: InventoryService,
                private _snackBar: MatSnackBar, private translateService: TranslateService,
                private invWarehouseService: InvWarehouseService ,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.inventoryService.find(this.id)
      .subscribe((data: any) => {
        this.inventory = data;

      })


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

  cancel() {
    this.router.navigateByUrl('/inventory-list');
  }

  submit(){
    console.log(this.form.value);
    this.translateService.currentLang==="en"? this.successMessage="Registered successfully!" : this.successMessage="Enregistré avec succès !";
    this.inventoryWarehouse= this.form.value;
    this.inventoryWarehouse.sparePart=this.inventory;
    this.invWarehouseService.create(this.inventoryWarehouse)
      .subscribe(
        data => {
          console.log(data)
          this._snackBar.open(this.successMessage, 'ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000
          });
          this.router.navigateByUrl('/inventory-list');

        },
        error => {
          this.error = error
          console.log(error)
        }
      );

  }
}
