import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {InvCategoryService} from "../../services/inv-category.service";
import {InvCategory} from "../../models/inv-category";

@Component({
  selector: 'app-add-inv-category',
  templateUrl: './add-inv-category.component.html',
  styleUrls: ['./add-inv-category.component.scss']
})
export class AddInvCategoryComponent {



  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  invCategory! : InvCategory
  successMessage :string='';
  error :string='';
  constructor(  private router: Router,
                private _snackBar: MatSnackBar, private translateService: TranslateService, private invCategoryService: InvCategoryService){}

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
    this.invCategory= this.form.value;
    this.invCategoryService.create(this.invCategory)
      .subscribe(
        data => {
          console.log(data)
          this._snackBar.open(this.successMessage, 'ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000
          });
          this.router.navigateByUrl('/inv-category-list');

        },
        error => {
          this.error = error
          console.log(error)
        }
      );

  }
  cancel() {
    this.router.navigateByUrl('/inv-category-list');
  }

}
