import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm-shipment',
  templateUrl: './confirm-shipment.component.html',
  styleUrls: ['./confirm-shipment.component.css']
})

export class ConfirmShipmentComponent implements OnInit {

  public quotesData: any;
  public shipDate: String;
  public shipmentID: String;
  public bookConfirmData : any = {};

  @Input()  public set confirmquotes(data:any) {
      this.quotesData = data.confirmQuotesData;
  }

  constructor(public dataService: DataserviceService,public router: Router,) { }

  ngOnInit() {
    this.bookConfirmData = this.dataService.bookedData;
  }

  goCreateShipment(){
    return this.router.navigate(['dashboard/create-shipment']);
  }
}
