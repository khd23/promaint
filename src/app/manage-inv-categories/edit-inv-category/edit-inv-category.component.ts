import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {InvCategory} from "../../models/inv-category";
import {InvCategoryService} from "../../services/inv-category.service";

@Component({
  selector: 'app-edit-inv-category',
  templateUrl: './edit-inv-category.component.html',
  styleUrls: ['./edit-inv-category.component.scss']
})
export class EditInvCategoryComponent {
  id!: number;

  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  invCategory! : InvCategory
  successMessage :string='';
  error :string='';
  constructor(  private router: Router,private route: ActivatedRoute,
                private _snackBar: MatSnackBar, private translateService: TranslateService, private invCategoryService: InvCategoryService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),


    });
  }

  ngAfterViewInit(): void {
    this.invCategoryService.find(this.id).subscribe((data: InvCategory) => {
      this.invCategory = data;
      this.form = new FormGroup({
        name: new FormControl(this.invCategory.name, [Validators.required]),
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
    this.invCategory= this.form.value;
    this.invCategoryService.update(this.id,this.invCategory)
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
