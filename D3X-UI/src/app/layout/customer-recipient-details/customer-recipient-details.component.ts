import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-customer-recipient-details',
  templateUrl: './customer-recipient-details.component.html',
  styleUrls: ['./customer-recipient-details.component.css']
})
export class CustomerRecipientDetailsComponent implements AfterContentChecked {

  pickupSummary: any = {}
  toAddress: string;

  constructor(public dataService: DataserviceService) { }

  

  ngAfterContentChecked() {
    this.pickupSummary = this.dataService.postData.shipTo;    
  }

}
