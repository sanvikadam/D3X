import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-shipment',
  templateUrl: './new-shipment.component.html',
  styleUrls: ['./new-shipment.component.css']
})
export class NewShipmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }


}
