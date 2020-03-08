import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NewShipmentComponent } from './views/new-shipment/new-shipment.component';
import { ShipmentDetailsComponent } from './views/shipment-details/shipment-details.component';
import { ProfileDetailsComponent } from './layout/profile-details/profile-details.component';
import { RecipientInformationComponent } from './layout/recipient-information/recipient-information.component';
import { CustomerRecipientDetailsComponent } from './layout/customer-recipient-details/customer-recipient-details.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'createShipment',
        component : RecipientInformationComponent
      },
      {
        path: 'shipmentDetails',
        component: CustomerRecipientDetailsComponent
      }
    ]
  }
  // {path: 'dashboard/create-shipment', component : RecipientInformationComponent, outlet: 'secondRouter' }, 
  // {path: 'dashboard/shipment-details', component: CustomerRecipientDetailsComponent, outlet: 'secondRouter'},
  

];


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }