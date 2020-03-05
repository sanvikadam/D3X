import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
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
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginFormComponent } from './layout/login-form/login-form.component';
import { SidebarNavigationComponent } from './layout/sidebar-navigation/sidebar-navigation.component';
import { ProfileDetailsComponent } from './layout/profile-details/profile-details.component';
import { ViewPageComponent } from './views/view-page/view-page.component';

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
    DeliveryShipmentDetailsComponent,
    LoginComponent,
    ProfileComponent,
    LoginFormComponent,
    SidebarNavigationComponent,
    ProfileDetailsComponent,
    ViewPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
