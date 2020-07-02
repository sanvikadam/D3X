import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ShipmentQuote } from '../models/shipment-quotes/shipment-quote';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  quote: ShipmentQuote[];
  shipmentId: String;
  shipDate: String;
  userName: string;
  public userDetails: any;
  public getBookingData: any;
  public bookedData: any = {};
  userData: any = {};
  
  

  constructor(
    private router: Router,
    private httpClient: HttpClient

  ) { }

  getUserDetails(userData){
    this.userDetails = userData;
  }

  public getQuote(getResponse){
    this.quote = getResponse.xml_root.rate_response.rates;
   }

   public confirmQuote(response){
     this.bookedData=response.shipment;
   }

   public getBookData(getResponse){
     this.getBookingData = getResponse;
   }
}
