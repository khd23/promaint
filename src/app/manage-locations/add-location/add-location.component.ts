import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Employee} from "../../models/employee";
import {ROLES} from "../../consts/roles";
import {STATUS} from "../../consts/status";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";
import {WarehouseService} from "../../services/warehouse.service";
import {TranslateService} from "@ngx-translate/core";
import {LocationService} from "../../services/location.service";
import {MatCheckbox} from "@angular/material/checkbox";
import {EmployeeLocation} from "../../models/location";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent {
  @ViewChildren('checkBoxLocation') checkBoxLocation!: QueryList<any> | undefined;
  @ViewChildren('checkBoxWarehouse') checkBoxWarehouse!: QueryList<any> | undefined;
  checkedLocations :any = [];
  checkedWarehouses :any = [];

  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  location! : EmployeeLocation
  successMessage :string='';
  error :string='';
  constructor(  private router: Router,
               private _snackBar: MatSnackBar, private translateService: TranslateService, private locationService: LocationService){}

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),


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
    this.location= this.form.value;
    this.locationService.create(this.location)
      .subscribe(
        data => {
          console.log(data)
          this._snackBar.open(this.successMessage, 'ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000
          });
          this.router.navigateByUrl('/locations-list');

        },
        error => {
          this.error = error
          console.log(error)
        }
      );

  }
  cancel() {
    this.router.navigateByUrl('/locations-list');
  }


}
