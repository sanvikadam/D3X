import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { PincodeValidator } from './pincode-validate';

@Component({
  selector: 'app-recipient-information',
  templateUrl: './recipient-information.component.html',
  styleUrls: ['./recipient-information.component.css']
})
export class RecipientInformationComponent implements AfterContentChecked{
  public showQuotes: boolean;
  public loading: boolean;
  public error: boolean;
  public passData: string;
  public finalData: any;
  public addressFlag: boolean; 
  public adderror: boolean;

  constructor(
      private _shipmentquote: DataserviceService,
      private router: Router,
      private httpClient: HttpClient
    ) {

     }

  pickupAddr: string;
  pickupCity: string;
  pickupCountry: any;
  pickupState: any;
  pickupZip: number;
  dropofAddr: string;
  dropofCity: string;
  dropofCountry: any;
  dropofState: any;
  dropofZip: number;
  // selectCountry: any = [];

  packWidth: number;
  packHeight: number;
  packWeight: number;
  packLength: number;
  sku: null;
  name: null;
  quantity: null;
  price: null;
  selectCountry: any = [];
  selectState: any = [];

  ngAfterContentChecked(){

    /* Select Values for country Dropdown*/
    this.dropofCountry = "US";
    this.dropofState = "AL";
    this.selectCountry = ["Choose Country", "US", "International"];
    /* Select Values for State Dropdown*/
    this.selectState = ["Choose State","AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA",
                        "ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR",
                        "PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","AS","GU","MH","FM","MP","PW",
                        "PR","VI"];


    this.passData =  JSON.stringify({
      "delivery_list": [{
        "delivery_id": "0080017667",
        "carrier_list": ["se-116096", "se-114090", "se-114110", "se-116096"],
        "address_from_line1": "7500 Cabrillo Blvd.",
        "address_from_line2": "",
        "address_from_city": "Los Angeles",
        "address_from_state": "CA",
        "address_from_postalcode": "90066",
        "address_from_country": "US",
        "address_to_line1": "",
        "address_to_line2": "",
        "address_to_city": "",
        "address_to_state": "",
        "address_to_postalcode": "",
        "address_to_country": "",
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
      }]
    });

    let convertData = JSON.parse(this.passData);

    this.finalData = convertData.delivery_list[0];

    this.pickupAddr = this.finalData.address_from_line1;
    this.pickupCity = this.finalData.address_from_city;
    this.pickupState = this.finalData.address_from_state;
    this.pickupCountry = this.finalData.address_from_country;
    this.pickupZip = this.finalData.address_from_postalcode;
  }
  
  public saveShipment(): void {
    this.showQuotes=false;
    this.error=false;

    // let fromAddress = this.pickupAddr.split(',');
    // let toAddress = this.dropofAddr.split(',');
    
    // Code that split and send data
    // console.log(toAddress.length);
    // console.log(toAddress);

    // if(fromAddress.length < 5 || toAddress.length < 5) {

    //   this.addressFlag = false;
    //     console.log("You have an error")

    // } else {
      this.adderror = false;
      this.loading = true;
      this.addressFlag = true;
      this.finalData.address_to_line1 = this.pickupAddr;
      this.finalData.address_to_city = this.pickupCity;
      this.finalData.address_to_state = this.pickupState;
      this.finalData.address_to_postalcode = this.pickupZip;
      this.finalData.address_to_country = this.pickupCountry;

      this.finalData.address_from_line1 = this.dropofAddr;
      this.finalData.address_from_city = this.dropofCity;
      this.finalData.address_from_state = this.dropofState;
      this.finalData.address_from_postalcode = this.dropofZip;
      this.finalData.address_from_country = this.dropofCountry;
    // }

    console.log("Final: " +this.finalData);

    let data = JSON.stringify({"delivery_list": [this.finalData]});

    let reqUrl = 'https://s0020806703trial-trial.apim1.hanatrial.ondemand.com:443/s0020806703trial/http/get_delv_quote_multi_bck/json';//'assets/local/ship-details.json';

 this.httpClient.post(reqUrl, data).subscribe(res=> {
   let responseStr = JSON.stringify(res);
   let responseObj = JSON.parse(responseStr);
   let responseRate = responseObj.xml_root.rate_response.rates

      if((responseRate == '') || (this.addressFlag == false)) {
        this.loading = false;
        this.error = false;
        this.showQuotes = false;
        this.adderror = true;
      } else {
        this.error = false;
        this.adderror = false;
        this._shipmentquote.getQuote(res);
        this.showQuotes = true;
        this.loading = false;
      }
    })
  }

  clear() {
    this.error = false;
    this.adderror = false;
    this.showQuotes = false;
    this.loading = false;
    this.pickupAddr = null;
    this.dropofAddr = null;
  }

}
