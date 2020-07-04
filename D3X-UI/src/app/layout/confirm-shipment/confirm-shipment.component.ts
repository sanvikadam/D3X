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
  public showQuotes: boolean;
  public loading: boolean;
  public error: boolean;
  public adderror: boolean;
  public displayAddress : boolean;
  public finalData: any;
  public addressFlag : boolean;

  @Input()  public set confirmquotes(data:any) {
      console.log("Confirm Quote in confirm shipment : " +data.confirmQuotesData);
      this.quotesData = data.confirmQuotesData;
  }

  constructor(
    public dataService: DataserviceService,
    public router: Router,
    public httpClient: HttpClient
    ) 
  { }

  modifyShipForm = new FormGroup({
    editfromAddDetails : new FormGroup({
      modifypickupAddr : new FormControl(),
      modifypickupCity: new FormControl(),
      modifypickupState: new FormControl(),
      modifypickupCountry: new FormControl(),
      modifypickupZip: new FormControl(),
    }),
    edittoAddDetails: new FormGroup({
      modifydropAddr : new FormControl(),
      modifydropCity : new FormControl(),
      modifydropState : new FormControl(),
      modifydropCountry: new FormControl(),
      modifydropZip : new FormControl()
    })
  })

  ngOnInit() {
    this.editAddress = true;
    this.displayAddress = false;
    this.bookConfirmData = this.dataService.bookedData;
  }

  goCreateShipment(){
    return this.router.navigate(['dashboard/create-shipment']);
  }

  modifyShipment(userQuotes):void{
    let userId = userQuotes.id;
    this.editAddress = false;
    this.displayAddress = true;
  }

  public modifyOrderShipment(): void {
    this.showQuotes=false;
    this.error=false;
    this.adderror = false;
    this.loading = true;
    this.addressFlag = true;

    let fromadd = this.modifyShipForm.get('editfromAddDetails');
    let toAdd = this.modifyShipForm.get('edittoAddDetails');

    this.finalData = JSON.stringify({
        "delivery_id": "0080017667",
        "carrier_list": ["se-116096", "se-114090", "se-114110", "se-116096"],
        "address_from_line1": fromadd.get('modifypickupAddr').value,
        "address_from_line2": "",
        "address_from_city": fromadd.get('modifypickupCity').value,
        "address_from_state": fromadd.get('modifypickupState').value,
        "address_from_postalcode": fromadd.get('modifypickupZip').value,
        "address_from_country": fromadd.get('modifypickupCountry').value,
        "address_to_line1": toAdd.get('modifydropAddr').value,
        "address_to_line2": "",
        "address_to_city": toAdd.get('modifydropCity').value,
        "address_to_state": toAdd.get('modifydropState').value,
        "address_to_postalcode": toAdd.get('modifydropZip').value,
        "address_to_country": toAdd.get('modifydropCountry').value,
        "validate_address": "no_validation",
        "package_weight": "1",
        "package_weight_unit": "ounce",
        "package_volume": "",
        "package_vol_unit": "",
        "package_value": "",
        "package_value_currency": "",
        "due_by_date": "",
        "due_by_time": "",
        "remarks": ""
    })

    this.dataService.getBookData(JSON.parse(this.finalData));

    let data = JSON.stringify({"delivery_list": JSON.parse(this.finalData)});

    // console.log("modify data: " +data);
    let reqUrl = 'https://s0020806703trial-trial.apim1.hanatrial.ondemand.com:443/s0020806703trial/http/get_delv_quote_multi_bck/json';

    this.httpClient.post(reqUrl, data).subscribe(res=> {

      let responseStr = JSON.stringify(res);
      let responseObj = JSON.parse(responseStr);
      let responseRate = responseObj.xml_root.rate_response.rates;

      if((responseRate == '') || (this.addressFlag == false)) {
        this.loading = false;
        this.error = false;
        this.showQuotes = false;
        this.adderror = true;
      } else {
        this.error = false;
        this.adderror = false;
        this.dataService.getQuote(res);
        this.showQuotes = true;
        this.loading = false;
      }
    }, (error)=> {
        this.loading = false;
        this.error = false;
        this.showQuotes = false;
        this.adderror = true;
    })
    
  }

  confirmQuote(confirmQuotes): void {
    
    let bookingData = this.dataService.getBookingData;
    console.log("confirmQuotes : ",confirmQuotes);
    console.log("bookingData : ",bookingData);
    let headers = new HttpHeaders({
      'Authorization':'Basic c2ctZGV2OnNnZGV2MTIz',
      'Content-Type':'application/json'
    });

    let reqURL = "https://v2-api.sheety.co/abad2b72fac02e07a97e26f8ff7d83bd/shipGenieEcoservity/shipment" 
  }
}
