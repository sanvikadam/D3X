import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipientInformationComponent } from './layout/recipient-information/recipient-information.component';
import { OrderSummaryInformationComponent } from './layout/order-summary-information/order-summary-information.component';
import { OrderLineItemsComponent } from './layout/order-line-items/order-line-items.component';
import { NewShipmentComponent } from './views/new-shipment/new-shipment.component';
import { ShipmentDetailsComponent } from './views/shipment-details/shipment-details.component';
import { OrderSummaryComponent } from './layout/order-summary/order-summary.component';
import { CustomerRecipientDetailsComponent } from './layout/customer-recipient-details/customer-recipient-details.component';
import { DeliveryShipmentDetailsComponent } from './layout/delivery-shipment-details/delivery-shipment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipientInformationComponent,
    OrderSummaryInformationComponent,
    OrderLineItemsComponent,
    NewShipmentComponent,
    ShipmentDetailsComponent,
    OrderSummaryComponent,
    CustomerRecipientDetailsComponent,
    DeliveryShipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
