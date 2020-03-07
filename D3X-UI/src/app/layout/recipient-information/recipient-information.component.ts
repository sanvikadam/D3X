import { Component, OnInit } from '@angular/core';
import { CreateShipment } from '../../models/create-shipment';
import { DataserviceService } from '../../service/dataservice.service';
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
      private router: Router
    ) {
  }

  passData;

  public saveShipment(): void {
    const jsonData = this._shipmentquote.getQuote();
    jsonData.subscribe(data=> {
      console.log(data);
      this.passData = data;
      console.log(this.passData);
    })
    this.router.navigate(["/shipment-details"]);
  }
}
