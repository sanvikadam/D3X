import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataserviceService } from '../../service/dataservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  public editAddress: boolean;
  public confirmCancel: boolean;
  public confirmRemove: boolean;

  @Input()  public set confirmquotes(data:any) {
      this.quotesData = data.confirmQuotesData;
  }

  constructor(
    public dataService: DataserviceService,
    public router: Router,
    public httpClient: HttpClient
    ) 
  { }

  ngOnInit() {

    this.bookConfirmData = this.dataService.bookedData;
    this.confirmCancel = false;
    this.confirmRemove = true;
  }

  goCreateShipment(){
    return this.router.navigate(['dashboard/create-shipment']);
  }

  modifyShipment(){
    return this.router.navigate(['dashboard/create-shipment']);
  }
  deleteShipment():void{
    this.confirmCancel = true;
  }

  noConfirmOrder():void {
    this.confirmCancel=false;
  }

  yesConfirmOrder(shipID): void {
    let orderID = shipID.id;
    let headers = new HttpHeaders({
      'Authorization':'Basic c2ctZGV2OnNnZGV2MTIz',
      'Content-Type':'application/json'
    });

    let requestURL = "https://v2-api.sheety.co/abad2b72fac02e07a97e26f8ff7d83bd/shipGenieEcoservity/shipment/"+orderID;

    this.httpClient.delete(requestURL, {headers: headers}).subscribe(resp=> {
      console.log(resp);
      this.confirmCancel=false;
       if(resp == null || resp == "") {
        this.confirmRemove = false;
       } 
    });
    
  }
}
