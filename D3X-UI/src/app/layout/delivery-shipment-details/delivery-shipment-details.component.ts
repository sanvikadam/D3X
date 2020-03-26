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

  cols: any = [];

  first: number = 0;

  last: number = 0;

  rows: number = 10;

  constructor(public dataService: DataserviceService) { 
    
  }

  ngAfterContentChecked() {
    this.quotes = this.dataService.quote;

    this.cols = [
      {fields: 'name', header:'Name'},
      {fields: 'shipdate', header:'Ship Date'},
      {fields: 'estimatedate', header:'Estimated Date'},
      {fields: 'estimateday', header:'Estiamted Day'},
      {fields: 'servicetype', header:'Service Type'},
      {fields: 'trackable', header:'Trackable'},
      {fields: 'price', header:'Price'},
      {fields: 'order', header:'Order'},
    ]
  }

  next(){
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === (this.quotes.length - this.rows);
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }
}
