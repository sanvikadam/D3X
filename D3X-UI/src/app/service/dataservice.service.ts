import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ShipmentQuote } from '../models/shipment-quotes/shipment-quote';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  postData: any = {};
  quote: ShipmentQuote[];
  shipmentId: String;
  shipDate: String;
  

  constructor(
    private router: Router,
    private httpClient: HttpClient

  ) { }

  getUserDetails(){
    // post the details to API server return user info if correct..
     return this.httpClient.get("assets/local/login.json");
  }



  public getQuote(getResponse){
    this.quote = getResponse.xml_root.rate_response.rates;
    
    this.postData = {
      carrierId: getResponse.xml_root.carrier_id,
      deliverDuty: getResponse.xml_root.delivered_duty_paid,
      shipFrom: {
        fromAddress: getResponse.xml_root.ship_from.address_line1,
        fromCity: getResponse.xml_root.ship_from.city_locality,
        fromCountry: getResponse.xml_root.ship_from.country_code,
        fromZipcode: getResponse.xml_root.ship_from.postal_code, 
        fromPhone: getResponse.xml_root.ship_from.phone
      },
      shipTo: {
        toAddress: getResponse.xml_root.ship_to.address_line1,
        toCity: getResponse.xml_root.ship_to.city_locality,
        toCountry: getResponse.xml_root.ship_to.country_code,
        toZipcode: getResponse.xml_root.ship_to.postal_code,
        toPhone: getResponse.xml_root.ship_to.phone
      }
    }
   }

   public confirmQuote(response){
    this.shipmentId = response.shipments[0].shipment_id;
    this.shipDate = response.shipments[0].ship_date;
     console.log("Response: " +response.shipments[0].shipment_id);

   }
}
