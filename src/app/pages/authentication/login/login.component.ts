import { Component } from '@angular/core';
import {Role} from "../../../models/role";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../../services/auth.service";
import {ForgotPasswordComponent} from "../../../modals/forgot-password/forgot-password.component";
import {UserService} from "../../../services/user.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: Role[] = [];
  hide = true;
  loginForm: FormGroup;
  logoUrl: string = '';
  error!: string;




  constructor(private authService: AuthService, private storageService: StorageService, private userService: UserService,
              private formBuilder: FormBuilder , private router: Router,public dialog: MatDialog) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }


  }

  onSubmit(): void {

    const { username, password,  } = this.loginForm.value;
    let user = {
      username: username,
      password: password,
      grantType: "password",
      withRefreshToken: true
    }

    this.authService.login(user).subscribe((data:any)=>{
        console.log("tokens",data);
        console.log("accessToken",data.accessToken);
        this.storageService.saveTokens(data);

        this.userService.getProfile().subscribe((data:any)=>{
          console.log("profile",data)
          this.storageService.saveUser(data);
          this.roles=data.roles;
          console.log("roles",this.roles)
          this.router.navigate(['/dashboard']);
        })


        this.isLoginFailed = false;
        this.isLoggedIn = true;


      }
      ,
      error => {
        if(error.status===401){
          this.error = "userNameOrPasswordIncorrect"
        }
        else if (error.status===423){
          this.error = "notAllowed";
        }
        else {
          this.error = "serverError";
        }


      })

  }

  reloadPage(): void {
    window.location.reload();
  }


  openDialog() : void {

    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log("ok")

    });
  }
}
