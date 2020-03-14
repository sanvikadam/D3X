import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-customer-recipient-details',
  templateUrl: './customer-recipient-details.component.html',
  styleUrls: ['./customer-recipient-details.component.css']
})
export class CustomerRecipientDetailsComponent implements OnInit {


  constructor(public dataService: DataserviceService) { }

  ngOnInit() {
    //console.log("Hello there : " +this.getmyData);
    console.log("Hi : " +this.dataService.postData);
    // console.log(this.dataService.getQuote);
    
  }

}
