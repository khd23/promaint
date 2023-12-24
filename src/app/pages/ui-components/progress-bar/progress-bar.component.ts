import {Component, Input} from '@angular/core';
import {EquipementsLitComponent} from "../../../manage-equipements/equipements-lit/equipements-lit.component";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() value!: string;


}
