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
import {PurcahsingListComponent} from "./manage-purchasing/purcahsing-list/purcahsing-list.component";
import {InvocesListComponent} from "./manage-invoces/invoces-list/invoces-list.component";
import {VendorsListComponent} from "./manage-vendors/vendors-list/vendors-list.component";
import {EmployeesListComponent} from "./manage-employees/employees-list/employees-list.component";
import {AddEmployeeComponent} from "./manage-employees/add-employee/add-employee.component";
import {authGuard} from "./helpers/auth.guard";
import {AppSideLoginComponent} from "./pages/authentication/login/login.component";

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
        canActivate:[authGuard],
        data: {
          title: 'Liste des équipements'
        }
      },
      {
        path: 'maintenances-list',
        component: MaintenanceListComponent,
        canActivate:[authGuard],
        data: {
          title: 'Ordres de travail'
        }
      },
      {
        path: 'add-maintenance',
        component: AddMaintenanceComponent,
        canActivate:[authGuard],
        data: {
          title: 'Ajouter Ordre de travail'
        }
      },
      {
        path: 'add-equipement',
        component: AddEquipemntComponent,
        canActivate:[authGuard],
        data: {
          title: 'Ajouter équipement'
        },
      },
      {
        path: 'inventory-list',
        component: InventoryListComponent,
        canActivate:[authGuard],
        data: {
          title: 'Inventaires'
        }
      },

      {
        path: 'purchasing-list',
        component: PurcahsingListComponent,
        canActivate:[authGuard],
        data: {
          title: 'Liste des achats'
        }
      },
      {
        path: 'invoces-list',
        component: InvocesListComponent,
        canActivate:[authGuard],
        data: {
          title: 'Factures'
        }
      },
      {
        path: 'vendors-list',
        component: VendorsListComponent,
        canActivate:[authGuard],
        data: {
          title: 'Vendeurs'
        }
      },
      {
        path: 'employees-list',
        component: EmployeesListComponent,

        canActivate:[authGuard],
        data: {
          title: 'Employes'
        }

      },
      {
        path: 'add-employee',
        component: AddEmployeeComponent,
        canActivate:[authGuard],
        data: {
          title: 'Ajouter Employe'
        }
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        canActivate:[authGuard],
        data: {
          title: 'Calendrier'
        }
      },
      {
        path: 'dashboard',
        canActivate:[authGuard],
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
    path: 'login',
    component: AppSideLoginComponent,
    data: {
      title: 'Login'
    }
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
