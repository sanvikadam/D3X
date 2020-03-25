import { Component, OnInit, AfterContentInit, AfterViewChecked, DoCheck, OnChanges } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { ShipmentQuote } from '../../models/shipment-quote';

@Component({
  selector: 'app-delivery-shipment-details',
  templateUrl: './delivery-shipment-details.component.html',
  styleUrls: ['./delivery-shipment-details.component.css']
})
export class DeliveryShipmentDetailsComponent implements OnInit {

  getData: any = {};
  quotes: any = [];
  newArray: any = [];



  constructor(public dataService: DataserviceService) { 
    
     this.getData = this.dataService;

    //  console.log("Length : " +this.dataService.quote);
    
     

  }

  ngOnInit() {
    console.log(this.getData);
    if(this.getData.quote) {
      console.log(this.getData.quote);
    }
    // this.getData = this.dataService;
    // console.log(this.getData);
    // this.quotes = this.dataService.quote;
    // console.log(typeof(this.quotes));
  }

}
