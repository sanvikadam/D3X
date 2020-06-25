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
  userName: string;
  public userDetails: any;
  public getBookingData: any;
  public bookedData: any = {};
  // checkUser: string;
  // checkPassword: string;
  
  

  constructor(
    private router: Router,
    private httpClient: HttpClient

  ) { }

  // getUserDetails(resp){
  //   // post the details to API server return user info if correct..
  //   this.checkUser = resp.username;
  //   this.checkPassword = resp.password;
  // }

  getUserDetails(resp){
    console.log("response", resp);
    this.userDetails = [
      {"id": resp[0].id, "key": "firstName", "title": "Customer First Name", "name": resp[0].firstName},
      {"id": resp[0].id, "key": "lastName", "title": "Customer Last Name", "name": resp[0].lastName},
      {"id": resp[0].id, "key": "loginId", "title": "Username", "name": resp[0].loginId},
      {"id": resp[0].id, "key": "phoneWork", "title": "Primary Phone", "name": resp[0].phoneWork},
      {"id": resp[0].id, "key": "addressEmail", "title": "Email", "name": resp[0].addressEmail},
      {"id": resp[0].id, "key": "addressLine1", "title": "Primary Address", "name": resp[0].address}
    ]
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
     console.log(response.shipment);
     this.bookedData=response.shipment;

    // this.shipmentId = response.shipment.shipmentsShipmentId;
    // this.shipDate = response.shipment.shipmentsShipDate;
   }

   public getBookData(getResponse){
     this.getBookingData = getResponse;
     console.log(this.getBookingData);
   }
}
