import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  postData: any = {};
  rate: any = [];
  

  constructor(
    private router: Router,
    private httpClient: HttpClient

  ) { }

  getUserDetails(){
    // post the details to API server return user info if correct..
     return this.httpClient.get("assets/local/login.json");
  }

  public getQuote(getResponse){
    console.log("What have you passed : " +getResponse);
    return this.postData = {
      carrierId: getResponse.xml_root.carrier_id,
      deliverDuty: getResponse.xml_root.delivered_duty_paid,
      rates : getResponse.xml_root.rate_response.rates,
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
}
