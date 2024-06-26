import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {InvCategory} from "../../models/inv-category";
import {UNIT_TYPE} from "../../consts/unitType";
import {ActivatedRoute, Router} from "@angular/router";
import {InvCategoryService} from "../../services/inv-category.service";
import {TranslateService} from "@ngx-translate/core";
import {InventoryService} from "../../services/inventory.service";
import {Inventory} from "../../models/inventory";
import {Warehouse} from "../../models/warehouse";
import {WarehouseService} from "../../services/warehouse.service";
import {Vendor} from "../../models/vendor";
import {VendorService} from "../../services/vendor.service";
import {InventoryVendor} from "../../models/inventory-vendor";
import {MatTable} from "@angular/material/table";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addInvVendor, removeInvVendor} from "../../ng-rx/actions/inventory-vendors.actions";
import {InvVendorService} from "../../services/inv-vendor.service";

@Component({
  selector: 'app-add-iventory-vendors',
  templateUrl: './add-iventory-vendors.component.html',
  styleUrls: ['./add-iventory-vendors.component.scss']
})
export class AddIventoryVendorsComponent {
  @ViewChild(MatTable) table !: MatTable<InventoryVendor>;

  displayedColumns: string[] = [];
  id!: number;

  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  successMessage: string = '';
  error: string = '';
  vendors: Vendor[] = [];
  inventoryVendor!:InventoryVendor;
  inventory!:Inventory;
  constructor(private router: Router, private vendorService: VendorService,
              private invVendorService: InvVendorService,private translateService: TranslateService,
              private route: ActivatedRoute,private inventoryService: InventoryService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.inventoryService.find(this.id)
      .subscribe((data: any) => {
        this.inventory = data;

      })

    this.vendorService.getAll()
      .subscribe((data: any) => {
        this.vendors = data;

      })
    this.form = new FormGroup({
      vendorPart: new FormControl('', [Validators.required]),
      barCode: new FormControl('', [Validators.required]),
      vendor: new FormControl('', [Validators.required]),


    });

  }

  get f() {
    return this.form.controls;
  }



  /**
   * Write code on Method
   *
   * @return response()
   */



  openDialog() {

  }
  cancel() {
    this.router.navigateByUrl('/inventory-list');
  }
  submit(){
    console.log(this.form.value);
    this.translateService.currentLang==="en"? this.successMessage="Registered successfully!" : this.successMessage="Enregistré avec succès !";
    this.inventoryVendor= this.form.value;
    this.inventoryVendor.sparePart=this.inventory;
    this.invVendorService.create(this.inventoryVendor)
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
