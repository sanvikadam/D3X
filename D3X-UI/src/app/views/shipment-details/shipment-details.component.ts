import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent implements OnInit {
  @Input() myData:any;

  constructor() { }

  ngOnInit() {
  }

}
