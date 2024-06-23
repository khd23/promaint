import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Employee} from "../../models/employee";
import {ROLES} from "../../consts/roles";
import {STATUS} from "../../consts/status";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {WarehouseService} from "../../services/warehouse.service";
import {LocationService} from "../../services/location.service";
import {MatCheckbox} from "@angular/material/checkbox";
import {Warehouse} from "../../models/warehouse";
import {EmployeeLocation} from "../../models/location";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  @ViewChildren('checkBoxLocation') checkBoxLocation!: QueryList<any> | undefined;
  @ViewChildren('checkBoxWarehouse') checkBoxWarehouse!: QueryList<any> | undefined;
  checkedLocations :any = [];
  checkedWarehouses :any = [];

  id!: number;
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  employee!: Employee
  error: any;
  roles = ROLES;
  status = STATUS;
  allowLogin: boolean = false;
  allowWorkOrder: boolean = false;
  successMessage: string = '';
  locations: any[] = [];
  warehouses: any[] = [];

  constructor(public employeeService: EmployeeService, private translateService: TranslateService,
              private warehouseService: WarehouseService, private locationService: LocationService,
              private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.locationService.getAll()
      .subscribe((data: any)=>{
        this.locations = data;

      })
    this.warehouseService.getAll()
      .subscribe((data: any)=>{
        this.warehouses = data;

      })

    console.log("employee onInit",this.employee)
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^.{8}$')]),
      userName: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      drivingLicense: new FormControl('', [Validators.required]),
      laborRate: new FormControl('', [Validators.required]),
      allowWorkOrder: new FormControl('', [Validators.required]),
      allowLogin: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      defaultWarehouse:new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&^_-]).{8,}/)]),


    });
  }
    ngAfterViewInit(): void {
      this.employeeService.find(this.id).subscribe((data: Employee) => {
        this.employee = data;
        this.allowLogin=this.employee.allowLogin;
        this.allowWorkOrder=this.employee.allowLogin;
        console.log("employee ",this.employee)
        this.form = new FormGroup({
          firstName: new FormControl(this.employee.firstName, [Validators.required]),
          lastName: new FormControl(this.employee.lastName, Validators.required),
          email: new FormControl(this.employee.email, [Validators.required, Validators.email]),
          phoneNumber: new FormControl(this.employee.phoneNumber, [Validators.required, Validators.pattern('^.{8}$')]),
          userName: new FormControl(this.employee.userName, [Validators.required]),
          status: new FormControl(this.employee.status, [Validators.required]),
          drivingLicense: new FormControl(this.employee.drivingLicense, [Validators.required]),
          laborRate: new FormControl(this.employee.laborRate, [Validators.required]),
          allowWorkOrder: new FormControl(this.employee.allowWorkOrder, [Validators.required]),
          allowLogin: new FormControl(this.employee.allowLogin, [Validators.required]),
          type: new FormControl(this.employee.type, [Validators.required]),
          defaultWarehouse:new FormControl(this.employee.defaultWarehouse, [Validators.required]),


        });

        this.form.controls['defaultWarehouse'].setValue(this.warehouses.find(w => w.id===this.employee.defaultWarehouse.id))
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
  submit() {
    console.log(this.form.value);
    this.translateService.currentLang === "en" ? this.successMessage = "Updated successfully!" : this.successMessage = "Modifié avec succès !";
    this.employee = this.form.value;
    this.employee.locations=this.checkedLocations;
    this.employee.warehouses=this.checkedWarehouses;
    this.employeeService.update(this.id,this.employee)
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
  cancel() {
    this.router.navigateByUrl('/employees-list');
  }

  isCheckedWarehouses(warehouse: any): boolean {
    return this.employee.warehouses.includes(<Warehouse>this.employee.warehouses.find(w => w.id === warehouse.id));
  }

  isCheckedLocations(location: any): boolean {
    return this.employee.locations.includes(<EmployeeLocation>this.employee.locations.find(w => w.id === location.id));
  }
}
