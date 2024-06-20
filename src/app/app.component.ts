import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Spike Angular Admin Tempplate';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang("fr");
    this.translateService.use("fr");
  }
}
