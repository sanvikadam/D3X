import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipient-information',
  templateUrl: './recipient-information.component.html',
  styleUrls: ['./recipient-information.component.css']
})
export class RecipientInformationComponent {

  constructor(
      private _shipmentquote: DataserviceService,
      private router: Router,
      private httpClient: HttpClient
    ) {
  }

  passData;

  public saveShipment(): void {
    // Code that actually needs to be run
    let passData = JSON.stringify({"delivery_list":[{"delivery_id":"0080017667","carrier_list":["se-116096", "se-114090", "se-114110", "se-116096"],"address_from_line1":"7500 Cabrillo Blvd.","address_from_line2":"","address_from_city":"Los Angeles","address_from_state":"CA","address_from_postalcode":"90066","address_from_country":"US","address_to_line1":"4009 Lincoln Blvd","address_to_line2":"","address_to_city":"Marina Del Rey","address_to_state":"CA","address_to_postalcode":"90292","address_to_country":"US","validate_address":"no_validation","package_weight":"1","package_weight_unit":"ounce","package_volume":"","package_vol_unit":"","package_value":"","package_value_currency":"","due_by_date":"","due_by_time":"","remarks":""},{"delivery_id":"0080017667","carrier_list":["se-116096", "se-114090", "se-114110", "se-116096"],"address_from_line1":"7500 Cabrillo Blvd.","address_from_line2":"","address_from_city":"Los Angeles","address_from_state":"CA","address_from_postalcode":"90066","address_from_country":"US","address_to_line1":"4009 Lincoln Blvd","address_to_line2":"","address_to_city":"Marina Del Rey","address_to_state":"CA","address_to_postalcode":"90292","address_to_country":"US","validate_address":"no_validation","package_weight":"1","package_weight_unit":"ounce","package_volume":"","package_vol_unit":"","package_value":"","package_value_currency":"","due_by_date":"","due_by_time":"","remarks":""}]});
    let reqUrl = 'https://s0020806703trial-trial.apim1.hanatrial.ondemand.com:443/s0020806703trial/http/get_delv_quote_multi_bck/json';//'assets/local/ship-details.json';

 this.httpClient.post(reqUrl, passData).subscribe(res=> {
      this._shipmentquote.getQuote(res);
    })


    this.router.navigate(["/dashboard/shipment-details"]);
  }
}
