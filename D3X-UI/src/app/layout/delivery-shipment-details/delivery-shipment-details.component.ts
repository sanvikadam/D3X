import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
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

  confirmQuotes: any;

  serviceCode:string

  constructor(
    public dataService: DataserviceService,
    private httpClient: HttpClient,
    private router: Router
    ) { 
    
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

  // Random shipment Id generator code
  shipmentIDGenerate() {
    let min = 51000;
    let max = 99999;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    let shipIDNo = "se-18"+num;
    console.log(typeof(shipIDNo));
    console.log(shipIDNo);
  }

  confirmQuote(confirmQuotes): void {
    this.shipmentIDGenerate();

    




    console.log("confirmQuotes : ",confirmQuotes);
    console.log(this.router.url);
    let bookingData = this.dataService.getBookingData;
    console.log("bookingData : " +JSON.stringify(bookingData));
    // console.log("Hello there");

    let headers = new HttpHeaders({
      'Authorization':'Basic c2ctZGV2OnNnZGV2MTIz',
      'Content-Type':'application/json'
    });

    let reqURL = "https://v2-api.sheety.co/abad2b72fac02e07a97e26f8ff7d83bd/shipGenieEcoservity/shipment" 
  

    let passData = JSON.stringify({
      "shipment": 
          {
              "hasErrors": false,
              "shipmentsAddressValidation": "null",
              "shipmentsShipmentId": "se-18515430",
              "userId": "null",
              "shipmentsCarrierId": "se-116096",
              "shipmentsServiceCode": confirmQuotes.service_code,
              "shipmentsExternalShipmentId": "null",
              "shipmentsShipDate": confirmQuotes.ship_date,
              "shipmentsCreatedAt": confirmQuotes.ship_date,
              "shipmentsModifiedAt": confirmQuotes.ship_date,
              "shipmentsShipmentStatus": "pending",
              "shipmentsShipToName": "ytshiy Miller",
              "shipmentsShipToPhone": "null",
              "shipmentsShipToCompanyName": "null",
              "shipmentsShipToAddressLine1": bookingData.address_to_line1,
              "shipmentsShipToAddressLine2": "null",
              "shipmentsShipToAddressLine3": "null",
              "shipmentsShipToCityLocality": bookingData.address_to_city,
              "shipmentsShipToStateProvince": bookingData.address_to_state,
              "shipmentsShipToPostalCode": bookingData.address_to_postalcode,
              "shipmentsShipToCountryCode": bookingData.address_to_country,
              "shipmentsShipToAddressResidentialIndicator": "yes",
              "shipmentsShipFromName": "John Doe",
              "shipmentsShipFromPhone": "null",
              "shipmentsShipFromCompanyName": "null",
              "shipmentsShipFromAddressLine1": bookingData.address_from_line1,
              "shipmentsShipFromAddressLine2": "null",
              "shipmentsShipFromAddressLine3": "null",
              "shipmentsShipFromCityLocality": bookingData.address_from_city,
              "shipmentsShipFromStateProvince": bookingData.address_from_state,
              "shipmentsShipFromPostalCode": bookingData.address_from_postalcode,
              "shipmentsShipFromCountryCode": bookingData.address_from_country,
              "shipmentsShipFromAddressResidentialIndicator": "unknown",
              "shipmentsWarehouseId": "null",
              "shipmentsReturnToName": "null",
              "shipmentsReturnToPhone": "null",
              "shipmentsReturnToCompanyName": "null",
              "shipmentsReturnToAddressLine1": "null",
              "shipmentsReturnToAddressLine2": "null",
              "shipmentsReturnToAddressLine3": "null",
              "shipmentsReturnToCityLocality": "null",
              "shipmentsReturnToStateProvince": "null",
              "shipmentsReturnToPostalCode": "null",
              "shipmentsReturnToCountryCode": "null",
              "shipmentsReturnToAddressResidentialIndicator": "unknown",
              "shipmentsConfirmation": "none",
              "shipmentsCustoms": "null",
              "shipmentsExternalOrderId": "null",
              "shipmentsOrderSourceCode": "null",
              "shipmentsAdvancedOptionsBillToAccount": "null",
              "shipmentsAdvancedOptionsBillToCountryCode": "null",
              "shipmentsAdvancedOptionsBillToParty": "null"
          }
  }  );


    this.httpClient.post(reqURL, passData,{
      headers: headers}).subscribe(resp=> {
      this.dataService.confirmQuote(resp);
      this.router.navigate(['/dashboard/manage-shipment'], {state: {confirmQuotesData: confirmQuotes}});
    })
  }

  
}
