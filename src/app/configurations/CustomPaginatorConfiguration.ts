import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Nombre de lignes par page';
  customPaginatorIntl.firstPageLabel = 'Première page';
  customPaginatorIntl.previousPageLabel = 'Page précédente';
  customPaginatorIntl.nextPageLabel = 'Page Suivante';
  customPaginatorIntl.lastPageLabel = 'Dernière page';
//customPaginatorIntl.getRangeLabel = dutchRangeLabel;

  return customPaginatorIntl;
}
