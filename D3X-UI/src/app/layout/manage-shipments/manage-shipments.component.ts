import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DeliveryShipmentDetailsComponent } from '../delivery-shipment-details/delivery-shipment-details.component';

@Component({
  selector: 'app-manage-shipments',
  templateUrl: './manage-shipments.component.html',
  styleUrls: ['./manage-shipments.component.css']
})
export class ManageShipmentsComponent implements OnInit, AfterViewInit {

  public confirmData: any;
  constructor(private cdr: ChangeDetectorRef) { }

ngOnInit() {
  this.confirmData = window.history.state;
  //this.cdr.detectChanges();
  }

public ngAfterViewInit(): void {

}

}
