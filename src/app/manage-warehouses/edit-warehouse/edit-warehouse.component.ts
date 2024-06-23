import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Warehouse} from "../../models/warehouse";
import {WarehouseService} from "../../services/warehouse.service";

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.scss']
})
export class EditWarehouseComponent {

  id!: number;

  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  warehouse! : Warehouse
  successMessage :string='';
  error :string='';
  constructor(  private router: Router,private route: ActivatedRoute,
                private _snackBar: MatSnackBar, private translateService: TranslateService, private warehouseService: WarehouseService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),


    });
  }

  ngAfterViewInit(): void {
    this.warehouseService.find(this.id).subscribe((data: Warehouse) => {
      this.warehouse = data;
      this.form = new FormGroup({
        name: new FormControl(this.warehouse.name, [Validators.required]),
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
    this.warehouse= this.form.value;
    this.warehouseService.update(this.id,this.warehouse)
      .subscribe(
        data => {
          console.log(data)
          this._snackBar.open(this.successMessage, 'ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000
          });
          this.router.navigateByUrl('/warehouses-list');

        },
        error => {
          this.error = error
          console.log(error)
        }
      );

  }
  cancel() {
    this.router.navigateByUrl('/warehouses-list');
  }
}
