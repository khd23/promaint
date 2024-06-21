import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { EquipementsLitComponent } from './manage-equipements/equipements-lit/equipements-lit.component';
import {MatIconModule} from "@angular/material/icon";
import { ProgressBarComponent } from './pages/ui-components/progress-bar/progress-bar.component';
import { DetailsModalComponent } from './manage-equipements/details-modal/details-modal.component';
import { SummaryComponent } from './manage-equipements/summary/summary.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { AddEquipemntComponent } from './manage-equipements/add-equipemnt/add-equipemnt.component';
import { AddEquipemntMainComponent } from './manage-equipements/add-equipemnt-main/add-equipemnt-main.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { MaintenanceListComponent } from './manage-maintenance/maintenance-list/maintenance-list.component';
import { AddMaintenanceComponent } from './manage-maintenance/add-maintenance/add-maintenance.component';
import { EditMaintenanceComponent } from './manage-maintenance/edit-maintenance/edit-maintenance.component';
import {NotifierModule, NotifierOptions} from "angular-notifier";
import { AddMaintenanceTabComponent } from './manage-maintenance/add-maintenance-tab/add-maintenance-tab.component';
import { InventoryListComponent } from './manage-inventory/inventory-list/inventory-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import {SchedulerModule} from "angular-calendar-scheduler";
import {CalendarModule, DateAdapter, MOMENT} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/moment";
import * as moment from "moment";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { InvocesListComponent } from './manage-invoces/invoces-list/invoces-list.component';
import { EmployeesListComponent } from './manage-employees/employees-list/employees-list.component';
import { PurcahsingListComponent } from './manage-purchasing/purcahsing-list/purcahsing-list.component';
import { VendorsListComponent } from './manage-vendors/vendors-list/vendors-list.component';
import {AppService} from "./services/app.service";
import {customNotifierOptions} from "./configurations/customNotifierOptions";
import {AddEmployeeComponent} from "./manage-employees/add-employee/add-employee.component";
import {DeleteModalComponent} from "./modals/delete-modal/delete-modal.component";
import {ForgotPasswordComponent} from "./modals/forgot-password/forgot-password.component";
import {TokenInterceptor} from "./helpers/token.interceptor";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {CustomMatPaginatorIntl} from "./configurations/CustomPaginatorConfiguration";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ViewEmployeeComponent } from './manage-employees/view-employee/view-employee.component';
import { EditEmployeeComponent } from './manage-employees/edit-employee/edit-employee.component';
import { ChangePwdEmployeeComponent } from './manage-employees/change-pwd-employee/change-pwd-employee.component';
import { AddVendorComponent } from './manage-vendors/add-vendor/add-vendor.component';
import { EditVendorComponent } from './manage-vendors/edit-vendor/edit-vendor.component';
import { ViewVendorComponent } from './manage-vendors/view-vendor/view-vendor.component';
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

export function httpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
};

// @ts-ignore
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    EquipementsLitComponent,
    ProgressBarComponent,
    DetailsModalComponent,
    SummaryComponent,
    AddEquipemntComponent,
    AddEquipemntMainComponent,
    MaintenanceListComponent,
    AddMaintenanceComponent,
    EditMaintenanceComponent,
    AddMaintenanceTabComponent,
    InventoryListComponent,
    CalendarComponent,
    InvocesListComponent,
    EmployeesListComponent,
    PurcahsingListComponent,
    VendorsListComponent,
    AddEmployeeComponent,
    DeleteModalComponent,
    ForgotPasswordComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    ChangePwdEmployeeComponent,
    AddVendorComponent,
    EditVendorComponent,
    ViewVendorComponent

  ],
  exports: [TablerIconsModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule,
    MatIconModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NotifierModule.withConfig(customNotifierOptions),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    SchedulerModule.forRoot({locale: 'fr', headerDateFormat: 'daysRange'}),
    TranslateModule.forRoot({
      loader:{
         provide:TranslateLoader,
        useFactory: httpLoaderFactory,
        deps:[HttpClient]
      }
    })

  ],
  providers: [
    AppService,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: MOMENT, useValue: moment},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
  ],
})
export class AppModule {}
