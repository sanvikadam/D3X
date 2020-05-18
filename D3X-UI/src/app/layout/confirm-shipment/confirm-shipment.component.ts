import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';


@Component({
  selector: 'app-confirm-shipment',
  templateUrl: './confirm-shipment.component.html',
  styleUrls: ['./confirm-shipment.component.css']
})
export class ConfirmShipmentComponent implements OnInit {

  public quotesData: any;
  public shipDate: String;
  public shipmentID: String;

  @Input()  public set confirmquotes(data:any) {
      this.quotesData = data.confirmQuotesData;
  }

  constructor(public dataService: DataserviceService,) { }

  ngOnInit() {
    this.shipmentID = this.dataService.shipmentId;
    this.shipDate = this.dataService.shipDate;
  }

}
