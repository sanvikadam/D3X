import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements AfterContentChecked {

  dropSummary: any = {};

  constructor(public dataService: DataserviceService) { }

  ngAfterContentChecked() {
    this.dropSummary = this.dataService.postData.shipFrom;

  }

}
