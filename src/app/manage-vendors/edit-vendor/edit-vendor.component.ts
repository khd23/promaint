import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Vendor} from "../../models/vendor";
import {VENDOR_TYPE} from "../../consts/vendorType";
import {PAYMENT_TYPE} from "../../consts/paymentType";
import {VendorService} from "../../services/vendor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CountryService} from "../../services/country.service";
import {TranslateService} from "@ngx-translate/core";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent {
  id!: number;
  form!: FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  vendor! : Vendor
  error: any;
  successMessage:string='';
  countries: any[] = [];
  locations: any[] = [];
  types= VENDOR_TYPE;
  paymentTypes= PAYMENT_TYPE;

  constructor( public vendorService: VendorService, private router: Router, private countryService: CountryService,
               private _snackBar: MatSnackBar, private translateService: TranslateService,  private route: ActivatedRoute
    , private locationService: LocationService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCountries();
    this.locationService.getAll()
      .subscribe((data: any)=>{
        this.locations = data;

      })
    this.vendorService.find(this.id).subscribe((data: Vendor) => {
      this.vendor = data;
    });
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

  ngAfterViewInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(this.vendor.firstName, [Validators.required]),
      lastName: new FormControl(this.vendor.lastName, Validators.required),
      email: new FormControl(this.vendor.email, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(this.vendor.phoneNumber, [Validators.required, Validators.pattern('^.{8}$')]),
      type: new FormControl(this.vendor.type, [Validators.required]),
      number: new FormControl(this.vendor.number, [Validators.required]),
      fax:new FormControl(this.vendor.fax, [Validators.required]),
      webSite:new FormControl(this.vendor.webSite, [Validators.required]),
      country: new FormControl(this.vendor.country, [Validators.required]),
      state: new FormControl(this.vendor.state, [Validators.required]),
      city: new FormControl(this.vendor.city, [Validators.required]),
      postalCode:new FormControl(this.vendor.postalCode, [Validators.required]),
      street:new FormControl(this.vendor.street, [Validators.required]),
      paymentType: new FormControl(this.vendor.paymentType, [Validators.required]),
      laborRate: new FormControl(this.vendor.laborRate, [Validators.required]),
      assignedWO:new FormControl(this.vendor.assignedWO, [Validators.required]),
      location:new FormControl(this.vendor.location, [Validators.required]),
      note:new FormControl(this.vendor.note, [Validators.required]),

    });
    this.form.controls['location'].setValue(this.locations.find(l => l.id===this.vendor.location?.id))

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
    this.translateService.currentLang==="en"? this.successMessage="Updates successfully!" : this.successMessage="Modifié avec succès !";
    this.vendor= this.form.value;
    this.vendorService.update(this.id,this.vendor)
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
