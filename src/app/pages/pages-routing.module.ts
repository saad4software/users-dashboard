import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DefaultLayoutComponent} from "../containers";
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";
import {UsersComponent} from "./users/users.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {

    path: 'dashboard',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
      },

      {
        path: 'home',
        component: HomeComponent,
      },


      {
        path: 'users/:id',
        component: DetailsComponent,
        data: {
          title: 'Details'
        }
      },

      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },

      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings'
        }
      },

    ]
  },

  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
