import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileDetailsComponent } from './layout/profile-details/profile-details.component';
import { RecipientInformationComponent } from './layout/recipient-information/recipient-information.component';
import { ManageShipmentsComponent } from './layout/manage-shipments/manage-shipments.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'create-shipment', pathMatch: 'full' },
      {
        path: 'profile',
        component : ProfileDetailsComponent
      },
      {
        path: 'create-shipment',
        component : RecipientInformationComponent
      },
      {
        path: 'manage-shipment',
        component: ManageShipmentsComponent
      },
      {
        path: 'cancel-shipment',
        component: ProfileDetailsComponent
      }
    ]
  }
];


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }