import { Component } from '@angular/core';

@Component({
  selector: 'app-add-equipemnt-main',
  templateUrl: './add-equipemnt-main.component.html',
  styleUrls: ['./add-equipemnt-main.component.scss']
})
export class AddEquipemntMainComponent {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
