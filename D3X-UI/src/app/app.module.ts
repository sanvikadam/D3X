import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipientInformationComponent } from './layout/recipient-information/recipient-information.component';
import { DeliveryShipmentDetailsComponent } from './layout/delivery-shipment-details/delivery-shipment-details.component';
import { LoginComponent } from './views/login/login.component';
import { LoginFormComponent } from './layout/login-form/login-form.component';
import { SidebarNavigationComponent } from './layout/sidebar-navigation/sidebar-navigation.component';
import { ProfileDetailsComponent } from './layout/profile-details/profile-details.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ManageShipmentsComponent } from './layout/manage-shipments/manage-shipments.component';
import { TableModule } from 'primeng/table';
import { ConfirmShipmentComponent } from './layout/confirm-shipment/confirm-shipment.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RecipientInformationComponent,
    DeliveryShipmentDetailsComponent,
    LoginComponent,
    LoginFormComponent,
    SidebarNavigationComponent,
    ProfileDetailsComponent,
    DashboardComponent,
    ManageShipmentsComponent,
    ConfirmShipmentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule  
  ],
  providers: [{
    provide: LocationStrategy, 
    useClass: PathLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
