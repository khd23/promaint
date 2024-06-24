import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Vendor} from "../../models/vendor";
import {Router} from "@angular/router";
import {VendorService} from "../../services/vendor.service";
import {TranslateService} from "@ngx-translate/core";
import {MatDialogRef} from "@angular/material/dialog";
import {AddIventoryVendorsComponent} from "../../manage-inventory/add-iventory-vendors/add-iventory-vendors.component";

@Component({
  selector: 'app-add-iventory-vendors-modal',
  templateUrl: './add-iventory-vendors-modal.component.html',
  styleUrls: ['./add-iventory-vendors-modal.component.scss']
})
export class AddIventoryVendorsModalComponent {
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  successMessage :string='';
  error :string='';
  vendors:Vendor[]=[];

  constructor(  private router: Router , private vendorService: VendorService,
                private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<AddIventoryVendorsComponent>){}

  ngOnInit(): void {
    this.vendorService.getAll()
      .subscribe((data: any)=>{
        this.vendors = data;

      })
    this.form = new FormGroup({
      barCode: new FormControl('', [Validators.required]),
      vendorPart: new FormControl('', [Validators.required]),
      vendor: new FormControl('', [Validators.required]),




    });
  }
  get f(){
    return this.form.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
