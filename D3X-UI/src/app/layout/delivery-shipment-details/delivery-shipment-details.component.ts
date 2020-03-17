import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-delivery-shipment-details',
  templateUrl: './delivery-shipment-details.component.html',
  styleUrls: ['./delivery-shipment-details.component.css']
})
export class DeliveryShipmentDetailsComponent implements OnInit {

  constructor(public dataService: DataserviceService) { }
  searchText;

  ngOnInit() {
  }

}
