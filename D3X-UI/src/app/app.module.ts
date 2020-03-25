import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipientInformationComponent } from './layout/recipient-information/recipient-information.component';
import { OrderLineItemsComponent } from './layout/order-line-items/order-line-items.component';
import { OrderSummaryComponent } from './layout/order-summary/order-summary.component';
import { CustomerRecipientDetailsComponent } from './layout/customer-recipient-details/customer-recipient-details.component';
import { DeliveryShipmentDetailsComponent } from './layout/delivery-shipment-details/delivery-shipment-details.component';
import { LoginComponent } from './views/login/login.component';
import { LoginFormComponent } from './layout/login-form/login-form.component';
import { SidebarNavigationComponent } from './layout/sidebar-navigation/sidebar-navigation.component';
import { ProfileDetailsComponent } from './layout/profile-details/profile-details.component';
import { OrderQuoteComponent } from './layout/order-quote/order-quote.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RecipientDetailsComponent } from './layout/recipient-details/recipient-details.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    RecipientInformationComponent,
    OrderLineItemsComponent,
    OrderSummaryComponent,
    CustomerRecipientDetailsComponent,
    DeliveryShipmentDetailsComponent,
    LoginComponent,
    LoginFormComponent,
    SidebarNavigationComponent,
    ProfileDetailsComponent,
    OrderQuoteComponent,
    DashboardComponent,
    RecipientDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
