import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {EmployeeLocation} from "../../models/location";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {LocationService} from "../../services/location.service";
import {Employee} from "../../models/employee";

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent {
  @ViewChildren('checkBoxLocation') checkBoxLocation!: QueryList<any> | undefined;
  @ViewChildren('checkBoxWarehouse') checkBoxWarehouse!: QueryList<any> | undefined;
  checkedLocations :any = [];
  checkedWarehouses :any = [];
  id!: number;

  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  location! : EmployeeLocation
  successMessage :string='';
  error :string='';
  constructor(  private router: Router,private route: ActivatedRoute,
                private _snackBar: MatSnackBar, private translateService: TranslateService, private locationService: LocationService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),


    });
  }

  ngAfterViewInit(): void {
    this.locationService.find(this.id).subscribe((data: EmployeeLocation) => {
      this.location = data;
      this.form = new FormGroup({
      name: new FormControl(this.location.name, [Validators.required]),
    });

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
    this.translateService.currentLang==="en"? this.successMessage="Updates successfully!" : this.successMessage="Modifié avec succès !";
    this.location= this.form.value;
    this.locationService.update(this.id,this.location)
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
