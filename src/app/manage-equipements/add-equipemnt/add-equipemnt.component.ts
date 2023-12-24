import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

export interface Equipement {
  code: string;
  date: string;
  type: string;
  brand: string;
  mh: string;
  serial: string;
  ref: string;
  status: string;
  badge: string;
}
@Component({
  selector: 'app-add-equipemnt',
  templateUrl: './add-equipemnt.component.html',
  styleUrls: ['./add-equipemnt.component.scss']
})
export class AddEquipemntComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

}
