import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Employee} from "../../models/employee";
import {ROLES} from "../../consts/roles";
import {STATUS} from "../../consts/status";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
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
  successMessage: string = '';

  constructor(public employeeService: EmployeeService, private translateService: TranslateService,
              private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.find(this.id).subscribe((data: Employee) => {
      this.employee = data;
    });
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
      password: new FormControl('', [Validators.required, Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&^_-]).{8,}/)]),


    });
  }
    ngAfterViewInit(): void {
      this.allowLogin=this.employee.allowLogin;
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

  cancel() {
    this.router.navigateByUrl('/employees-list');
  }
}
