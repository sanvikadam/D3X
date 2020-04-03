import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { Router } from '@angular/router';
// import { ShipmentQuote } from '../../models/shipment-quote';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  constructor(
    public dataService: DataserviceService,
    private httpClient: HttpClient,
    private router: Router
    ) { 
    
  }

  ngAfterContentChecked() {
    this.quotes = this.dataService.quote;
    // console.log("Quotes : " +this.quotes);

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

  confirmQuote(serviceCode): void {
    console.log("Service code : " +serviceCode);
    let reqURL = "https://s0020806703trial-trial.apim1.hanatrial.ondemand.com/s0020806703trial/http/get_Order_Shipment/json";
    let passData = JSON.stringify({
      "shipments": [
        {
          "validate_address": "no_validation",
          "service_code": "ups_ground",
          "ship_to": {
            "name": "Amanda Miller",
            "phone": "555-555-5555",
            "address_line1": "525 S Winchester Blvd",
            "city_locality": "San Jose",
            "state_province": "CA",
            "postal_code": "95128",
            "country_code": "US",
            "address_residential_indicator": "yes"
          },
          "ship_from": {
            "company_name": "Example Corp.",
            "name": "John Doe",
            "phone": "111-111-1111",
            "address_line1": "4009 Marathon Blvd",
            "address_line2": "Suite 300",
            "city_locality": "Austin",
            "state_province": "TX",
            "postal_code": "78756",
            "country_code": "US",
            "address_residential_indicator": "no"
          },
          "packages": [
            {
              "weight": {
                "value": 1.0,
                "unit": "ounce"
              }
            }
          ]
        }
      ]
    });

    this.httpClient.post(reqURL, passData).subscribe(resp=> {
      this.dataService.confirmQuote(resp);
      this.router.navigate(['dashboard/manage-shipment']);
    })
  }
}
