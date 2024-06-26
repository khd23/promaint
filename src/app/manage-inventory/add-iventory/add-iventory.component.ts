import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Inventory} from "../../models/inventory";
import {InventoryService} from "../../services/inventory.service";
import {InvCategory} from "../../models/inv-category";
import {InvCategoryService} from "../../services/inv-category.service";
import {UNIT_TYPE} from "../../consts/unitType";

@Component({
  selector: 'app-add-iventory',
  templateUrl: './add-iventory.component.html',
  styleUrls: ['./add-iventory.component.scss']
})
export class AddIventoryComponent {
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  inventory! : Inventory
  successMessage :string='';
  error :string='';
  categories:InvCategory[]=[];
  unitTypes= UNIT_TYPE;

  constructor(  private router: Router , private invCategoryService: InvCategoryService,
                private _snackBar: MatSnackBar, private translateService: TranslateService, private inventoryService: InventoryService){}

  ngOnInit(): void {
    this.invCategoryService.getAll()
      .subscribe((data: any)=>{
        this.categories = data;

      })
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      unitType: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),



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
  cancel() {
    this.router.navigateByUrl('/inventory-list');
  }
  submit(){
    console.log(this.form.value);
    this.translateService.currentLang==="en"? this.successMessage="Registered successfully!" : this.successMessage="Enregistré avec succès !";
    this.inventory= this.form.value;
    this.inventoryService.create(this.inventory)
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
