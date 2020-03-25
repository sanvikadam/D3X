import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { ShipmentQuote } from '../../models/shipment-quote';

@Component({
  selector: 'app-delivery-shipment-details',
  templateUrl: './delivery-shipment-details.component.html',
  styleUrls: ['./delivery-shipment-details.component.css']
})
export class DeliveryShipmentDetailsComponent implements AfterContentChecked {

  quotes: any = [];

  constructor(public dataService: DataserviceService) { 
    
  }

  ngAfterContentChecked() {
    this.quotes = this.dataService.quote;
  }
}
