import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ROLES} from "../../consts/roles";
import {STATUS} from "../../consts/status";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {VendorService} from "../../services/vendor.service";
import {Vendor} from "../../models/vendor";
import {CountryService} from "../../services/country.service";
import {LocationService} from "../../services/location.service";
import {VENDOR_TYPE} from "../../consts/vendorType";
import {PAYMENT_TYPE} from "../../consts/paymentType";

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent {
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  vendor! : Vendor
  error: any;
  allowLogin: boolean=false;
  successMessage:string='';
  countries: any[] = [];
  locations: any[] = [];
  types= VENDOR_TYPE;
  paymentTypes= PAYMENT_TYPE;

  constructor( public vendorService: VendorService, private router: Router, private countryService: CountryService,
               private _snackBar: MatSnackBar, private translateService: TranslateService
             , private locationService: LocationService){}

  ngOnInit(): void {
    this.getCountries();
    this.locationService.getAll()
      .subscribe((data: any)=>{
        this.locations = data;

      })
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required,  Validators.pattern('^.{8}$')]),
      number: new FormControl('', [Validators.required]),
      fax:new FormControl('', [Validators.required]),
      webSite:new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalCode:new FormControl('', [Validators.required]),
      street:new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      paymentType: new FormControl('', [Validators.required]),
      laborRate: new FormControl('', [Validators.required]),
      assignedWO:new FormControl('', [Validators.required]),
      location:new FormControl('', [Validators.required]),
      note:new FormControl('', [Validators.required]),

    });
  }
  get f(){
    return this.form.controls;
  }
  private getCountries() {
    //this.loading = true;
    this.countryService.getAll()
      .subscribe((data: any)=>{
        this.countries = data;

      })
  }


  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.translateService.currentLang==="en"? this.successMessage="Registered successfully!" : this.successMessage="Enregistré avec succès !";
    this.vendor= this.form.value;
    this.vendorService.create(this.vendor)
      .subscribe(
        data => {
          console.log(data)
          this._snackBar.open(this.successMessage, 'ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5000
          });
          this.router.navigateByUrl('/vendors-list');

        },
        error => {
          this.error = error
          console.log(error)
        }
      );

  }
  cancel() {
    this.router.navigateByUrl('/vendors-list');
  }
}
