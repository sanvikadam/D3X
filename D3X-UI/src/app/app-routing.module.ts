import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewShipmentComponent } from './views/new-shipment/new-shipment.component';
import { ShipmentDetailsComponent } from './views/shipment-details/shipment-details.component';

const appRoutes: Routes = [
  {path: 'create-shipment', component : NewShipmentComponent }, 
  {path: 'shipment-details', component: ShipmentDetailsComponent},
  {path: '', redirectTo: '/create-shipment', pathMatch: 'full'}
];


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }