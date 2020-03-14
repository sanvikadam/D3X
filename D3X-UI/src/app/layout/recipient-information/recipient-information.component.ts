import { Component, OnInit } from '@angular/core';
import { CreateShipment } from '../../models/create-shipment';
import { DataserviceService } from '../../service/dataservice.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipient-information',
  templateUrl: './recipient-information.component.html',
  styleUrls: ['./recipient-information.component.css']
})
export class RecipientInformationComponent {

  shipment : CreateShipment = {
    pickupAddr: null,
    dropAddr: null,
    packWidth: null,
    packHeight: null,
    packWeight: null,
    sku: null,
    name: null,
    quantity: null,
    price: null
  };

  constructor(
      private _shipmentquote: DataserviceService,
      private router: Router,
      private httpClient: HttpClient
    ) {
  }

  passData;

  public saveShipment(): void {
    var reqUrl = 'assets/local/ship-details.json';
    this.httpClient.get(reqUrl).subscribe(res=> {
      this._shipmentquote.getQuote(res);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const jsonData = this._shipmentquote.getQuote();








    // jsonData.subscribe(res=> {
    //   //console.log(res.xml_root);
    //   this.passData = res.xml_root;
    //   console.log(this.passData);
    // })
    this.router.navigate(["/dashboard/shipment-details"]);
  }
}
