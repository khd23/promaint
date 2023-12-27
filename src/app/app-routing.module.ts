import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlankComponent} from './layouts/blank/blank.component';
import {FullComponent} from './layouts/full/full.component';
import {EquipementsLitComponent} from "./manage-equipements/equipements-lit/equipements-lit.component";
import {AddEquipemntComponent} from "./manage-equipements/add-equipemnt/add-equipemnt.component";
import {MaintenanceListComponent} from "./manage-maintenance/maintenance-list/maintenance-list.component";
import {AddMaintenanceComponent} from "./manage-maintenance/add-maintenance/add-maintenance.component";
import {InventoryListComponent} from "./manage-inventory/inventory-list/inventory-list.component";
import {CalendarComponent} from "./calendar/calendar.component";

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },

      {
        path: 'equipements-list',
        component: EquipementsLitComponent,
        data: {
          title: 'Liste des équipements'
        }
      },
      {
        path: 'maintenances-list',
        component: MaintenanceListComponent,
        data: {
          title: 'Ordres de travail'
        }
      },
      {
        path: 'add-maintenance',
        component: AddMaintenanceComponent,
        data: {
          title: 'Ajouter Ordre de travail'
        }
      },
      {
        path: 'add-equipement',
        component: AddEquipemntComponent,
        data: {
          title: 'Ajouter équipement'
        },
      },
      {
        path: 'inventory-list',
        component: InventoryListComponent,
        data: {
          title: 'Inventaires'
        }
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        data: {
          title: 'Calendrier'
        }
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
