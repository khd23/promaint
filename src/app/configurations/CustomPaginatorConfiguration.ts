import {Injectable} from '@angular/core';
import {MatPaginatorIntl} from "@angular/material/paginator";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  constructor( private translateService: TranslateService) {
    super();

    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
    if(this.translateService.currentLang==="fr") {
      this.itemsPerPageLabel = 'Nombre de lignes par page';
      this.firstPageLabel = 'Première page';
      this.previousPageLabel = 'Page précédente';
      this.nextPageLabel = 'Page Suivante';
      this.lastPageLabel = 'Dernière page';
    }
    else if (this.translateService.currentLang==="en"){
      this.itemsPerPageLabel = 'Items Per Page';
      this.firstPageLabel = 'First Page';
      this.previousPageLabel = 'Previous Page';
      this.nextPageLabel = 'Next Page';
      this.lastPageLabel = 'Last Page';
    }

  }

  // override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
  //   if (length === 0 || pageSize === 0) {
  //     return `0 / ${length}`;
  //   }
  //   length = Math.max(length, 0);
  //   const startIndex = page * pageSize;
  //   const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
  //   return `${startIndex + 1} - ${endIndex} / ${length}`;
  // }
}
