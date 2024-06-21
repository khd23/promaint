import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Equipement} from "../../../manage-equipements/equipements-lit/equipements-lit.component";
import {TranslateService} from "@ngx-translate/core";

export interface Message{
  icon:string,
  subject:string,
  content: string,
}

const ELEMENT_DATA: Message[] = [
  { icon: 'error', subject: 'Temprétature élevée', content: 'Plieuse E001'},
  { icon: 'error', subject: 'Vibration excessif', content: 'Cinteuse E002'},
  { icon: 'error', subject: 'Niveau dhuile bas', content: 'Camion C004'},
  { icon: 'error', subject: 'Pression hydraulique élevée', content: 'Plieuse E001'},
  { icon: 'error', subject: 'Entretien dépassé', content: 'Plieuse E001'},
  { icon: 'error', subject: 'Entretien proche', content: 'Cinteuse E002'},



];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})


export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();


  isBadgeHidden=false;
  showFiller = false;
  messages= ELEMENT_DATA;
  currentLanguage!:string


  constructor(public dialog: MatDialog, private translateService: TranslateService) {

  }
  ngOnInit(): void {

    this.getCurrentLanguage();

  }
  changeLanguage(language: string) {
    this.translateService.use(language);
    this.translateService.setDefaultLang(language);
    this.getCurrentLanguage();
  }


    getCurrentLanguage(){
      this.translateService.currentLang==="en"? this.currentLanguage="english" : this.currentLanguage="french";
      console.log(this.currentLanguage)
    }

}
