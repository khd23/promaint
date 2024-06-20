import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  form!: FormGroup;
  error!:string;

  constructor( private userService: UserService,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
  ) {}
  ngOnInit(): void {


    this.form = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),

    });
  }
  get f(){
    return this.form.controls;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit() {
    this.userService.forgotPassword(this.form.value.email).subscribe(
      data => {
        console.log("response",data);
        this.dialogRef.close();

      },
      error => {
        this.error = error
        console.log(error)
      }
    );

  }
}
