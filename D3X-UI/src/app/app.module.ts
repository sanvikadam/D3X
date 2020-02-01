import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipientInformationComponent } from './layout/recipient-information/recipient-information.component';
import { OrderSummaryInformationComponent } from './layout/order-summary-information/order-summary-information.component';
import { OrderLineItemsComponent } from './layout/order-line-items/order-line-items.component';
import { NewShipmentComponent } from './views/new-shipment/new-shipment.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipientInformationComponent,
    OrderSummaryInformationComponent,
    OrderLineItemsComponent,
    NewShipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
