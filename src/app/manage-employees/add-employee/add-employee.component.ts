import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";
import {ROLES} from "../../consts/roles";
import {STATUS} from "../../consts/status";
import {TranslateService} from "@ngx-translate/core";
import {LocationService} from "../../services/location.service";
import {WarehouseService} from "../../services/warehouse.service";
import {MatCheckbox} from "@angular/material/checkbox";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  @ViewChildren('checkBoxLocation') checkBoxLocation!: QueryList<any> | undefined;
  @ViewChildren('checkBoxWarehouse') checkBoxWarehouse!: QueryList<any> | undefined;
  checkedLocations :any = [];
  checkedWarehouses :any = [];

  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  employee! : Employee
  error: any;
  roles= ROLES;
  status= STATUS;
  allowLogin: boolean=false;
  successMessage:string='';
  locations: any[] = [];
  warehouses: any[] = [];

  constructor( public employeeService: EmployeeService, private router: Router, private warehouseService: WarehouseService,
               private _snackBar: MatSnackBar, private translateService: TranslateService, private locationService: LocationService){}

  ngOnInit(): void {
    this.locationService.getAll()
      .subscribe((data: any)=>{
        this.locations = data;

      })
    this.warehouseService.getAll()
      .subscribe((data: any)=>{
        this.warehouses = data;

      })
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required,  Validators.pattern('^.{8}$')]),
      userName: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      drivingLicense:new FormControl('', [Validators.required]),
      laborRate:new FormControl('', [Validators.required]),
      allowWorkOrder:new FormControl('', [Validators.required]),
      allowLogin:new FormControl('', [Validators.required]),
      type:new FormControl('', [Validators.required]),
      defaultWarehouse:new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&^_-]).{8,}/)]),

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
    this.employee= this.form.value;
    this.employee.locations=this.checkedLocations;
    this.employee.warehouses=this.checkedWarehouses;
    this.employeeService.create(this.employee)
      .subscribe(
        data => {
          console.log(data)
          this._snackBar.open(this.successMessage, 'ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000
          });
          this.router.navigateByUrl('/employees-list');

        },
        error => {
          this.error = error
          console.log(error)
        }
      );

  }
  cancel() {
    this.router.navigateByUrl('/employees-list');
  }

  getCheckboxLocation(checkBox: MatCheckbox) {
    this.checkedLocations = []; // resetting each Time new event is fire.
    // filtering only checked vlaue and assign to checked variable.
    const checked = this.checkBoxLocation!.filter(checkbox => checkbox.checked);

    // then, we make object array of checked, and value by checked variable
    checked.forEach(data => {
      this.checkedLocations.push (data.value)
    })
    console.log("locations checked",this.checkedLocations)
  }

  getCheckboxWarehouse(checkBox: MatCheckbox) {
    this.checkedWarehouses = []; // resetting each Time new event is fire.
    // filtering only checked vlaue and assign to checked variable.
    const checked = this.checkBoxWarehouse!.filter(checkbox => checkbox.checked);

    // then, we make object array of checked, and value by checked variable
    checked.forEach(data => {
      this.checkedWarehouses.push (data.value)
    })
    console.log("Warehouses checked",this.checkedWarehouses)
  }
}
