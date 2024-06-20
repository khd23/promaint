import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  employee! : Employee
  error: any;
  constructor( public employeeService: EmployeeService, private router: Router,private _snackBar: MatSnackBar){}

  ngOnInit(): void {

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
    this.employee= this.form.value;
    this.employeeService.create(this.employee)
      .subscribe(
        data => {
          console.log(data)
          this._snackBar.open("Enregistré avec succès !", 'ok', {
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
