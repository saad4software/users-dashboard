import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { HomeComponent } from './home/home.component'
import {
  AvatarModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  PaginationModule, SpinnerModule,
  TableModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import {DetailsComponent} from "./details/details.component";
import {UsersComponent} from "./users/users.component";
import {SettingsComponent} from "./settings/settings.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
      LoginComponent,
      RegisterComponent,
      Page404Component,
      Page500Component,
      HomeComponent,
      DetailsComponent,
      UsersComponent,
      DashboardComponent,
      SettingsComponent,
    ],
    exports: [
      HomeComponent
    ],
    imports: [
      CommonModule,
      PagesRoutingModule,
      CardModule,
      TableModule,
      PaginationModule,
      AvatarModule,
      SpinnerModule,
      ButtonModule,
      GridModule,
      IconModule,
      FormModule,
      FormsModule,
    ]
})
export class PagesModule {
}
