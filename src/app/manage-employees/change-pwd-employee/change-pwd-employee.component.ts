import { Component } from '@angular/core';
import {AbstractControlOptions, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Employee} from "../../models/employee";
import {ROLES} from "../../consts/roles";
import {STATUS} from "../../consts/status";
import {EmployeeService} from "../../services/employee.service";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {confirmPasswordValidator} from "../../validators/confirm-password.validator";

@Component({
  selector: 'app-change-pwd-employee',
  templateUrl: './change-pwd-employee.component.html',
  styleUrls: ['./change-pwd-employee.component.scss']
})
export class ChangePwdEmployeeComponent {
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
        ancientPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required ,  Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&^_-]).{8,}/)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&^_-]).{8,}/)]),

      },
      {validators:confirmPasswordValidator} as  AbstractControlOptions

    );
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
    this.translateService.currentLang === "en" ? this.successMessage = "Password Updated successfully!" : this.successMessage = "mode de passe modifié !";
    this.employeeService.changePassword({userName: this.employee.userName,ancientPassword:this.form.value.ancientPassword, newPassword: this.form.value.newPassword})
      .subscribe((res:any) => {
          this._snackBar.open(this.successMessage, 'ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 5000
            }
          )
          this.router.navigateByUrl('/employees-list');
          console.log('password changed successfully')
        }, err => {
          console.log("err",err)
          this.error=err;
        }

      )

  }

  cancel() {
    this.router.navigateByUrl('/employees-list');
  }
}
