import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Inventory} from "../../models/inventory";
import {InventoryService} from "../../services/inventory.service";

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
  Inventory! : Inventory
  successMessage :string='';
  error :string='';
  constructor(  private router: Router,
                private _snackBar: MatSnackBar, private translateService: TranslateService, private inventoryService: InventoryService){}

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      unitCost: new FormControl('', [Validators.required]),
      qte: new FormControl('', [Validators.required]),



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
  submit(){
    console.log(this.form.value);
    this.translateService.currentLang==="en"? this.successMessage="Registered successfully!" : this.successMessage="Enregistré avec succès !";
    this.Inventory= this.form.value;
    this.inventoryService.create(this.Inventory)
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
  cancel() {
    this.router.navigateByUrl('/inventory-list');
  }

}
