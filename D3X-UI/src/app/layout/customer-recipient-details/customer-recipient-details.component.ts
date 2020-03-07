import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-recipient-details',
  templateUrl: './customer-recipient-details.component.html',
  styleUrls: ['./customer-recipient-details.component.css']
})
export class CustomerRecipientDetailsComponent implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
    //console.log("Hello there : " +this.getmyData);
    
  }

}
