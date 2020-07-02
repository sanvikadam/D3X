import { Component, OnInit, AfterContentChecked, ViewChild } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { PincodeValidator } from './pincode-validate';

@Component({
  selector: 'app-recipient-information',
  templateUrl: './recipient-information.component.html',
  styleUrls: ['./recipient-information.component.css']
})
export class RecipientInformationComponent implements OnInit{

  // bookShipForm : FormGroup;
  // fromAddDetails: FormGroup;

  public showQuotes: boolean;
  public loading: boolean;
  public error: boolean;
  public passData: string;
  public finalData: any;
  public addressFlag: boolean; 
  public adderror: boolean;
  public showPickInputCity: boolean;
  public showPickSelectCity: boolean;
  public showDropInputCity: boolean;
  public showDropSelectCity: boolean;
  selectCountry: any = [];
  selectState: any = [];


  constructor(
      private _shipmentquote: DataserviceService,
      private router: Router,
      private httpClient: HttpClient,
      private _formBuilder: FormBuilder
    ) {

     }

     bookShipForm = new FormGroup({
      fromAddDetails : new FormGroup({
        // pickupAddr: ['', Validators.required],
      pickupAddr: new FormControl('', [Validators.required]), //, Validators.pattern(/^[a-zA-Z0-9\s,'-.]*$/)
      pickupCity: new FormControl('', [Validators.required]),
      pickupCountry: new FormControl(''),
      pickupState: new FormControl('', Validators.required),
      pickupZip: new FormControl('', Validators.required)
    }),
    toAddDetails: new FormGroup({
      dropofAddr: new FormControl('', Validators.required),
      dropofCity: new FormControl('', Validators.required),
      dropofCountry: new FormControl(''),
      dropofState: new FormControl('', Validators.required),
      dropofZip: new FormControl('', Validators.required)
    }),
    packDimensionDetails: new FormGroup({
      packWidth: new FormControl(null),
      packHeight: new FormControl(null),
      packLength: new FormControl(null),
      packWeight: new FormControl(null)
    }),
    orderListDetails: new FormGroup({
      sku: new FormControl(null),
      name: new FormControl(null),
      quantity: new FormControl(null),
      price: new FormControl(null)
    })
  })

  get pickupAddr(): any{
    return this.bookShipForm.get('fromAddDetails.pickupAddr');
  }

  get pickupCity(): any{
    return this.bookShipForm.get('fromAddDetails.pickupCity');
  }

  get pickupState(): any{
    return this.bookShipForm.get('fromAddDetails.pickupState');
  }

  get pickupCountry(){
    return this.bookShipForm.get('fromAddDetails.pickupCountry');
  }

  get pickupZip(): any{
    return this.bookShipForm.get('fromAddDetails.pickupZip');
  }
      

  get dropofAddr(): any{
    return this.bookShipForm.get('toAddDetails.dropofAddr');
  }

  get dropofCity(): any{
    return this.bookShipForm.get('toAddDetails.dropofCity');
  }

  get dropofCountry(): any{
    return this.bookShipForm.get('toAddDetails.dropofCountry');
  }

  get dropofState(): any{
    return this.bookShipForm.get('toAddDetails.dropofState');
  }

  get dropofZip(): any{
    return this.bookShipForm.get('toAddDetails.dropofZip');
  }

     /* Pickup country selectbox */
     changePickCountry(deviceValue: string){
       if(deviceValue=="International") {
         this.showPickSelectCity = true;
         this.showPickInputCity = true;
       } else {
         this.showPickSelectCity = false;
         this.showPickInputCity = false;
       }
    }

    /* Drop country selectbox */
    changeDropCountry(deviceValue: string){
       if(deviceValue=="International") {
         this.showDropSelectCity = true;
         this.showDropInputCity = true;
       } else {
         this.showDropSelectCity = false;
         this.showDropInputCity = false;
       }
    }

      /* Pickup state selectbox */
    changePickState(stateValue: string) {
      this.bookShipForm.patchValue({pickupState:stateValue});
    }  

  // /* Drop state selectbox */
    changeDropState(stateValue: string) {
      this.bookShipForm.patchValue({dropofState: stateValue});
    } 

  ngOnInit(){
    

    /* Select Values for country Dropdown*/

    this.selectCountry = ["US", "International"];
    /* Select Values for State Dropdown*/
    this.selectState = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA",
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

    /* Add the data in the form field in From address by default */
    let convertData = JSON.parse(this.passData);
    this.finalData = convertData.delivery_list[0];
    this.bookShipForm.patchValue({
      fromAddDetails: {
        pickupAddr: this.finalData.address_from_line1,
        pickupCity: this.finalData.address_from_city,
        pickupCountry: this.finalData.address_from_country,
        pickupState: this.finalData.address_from_state,
        pickupZip: this.finalData.address_from_postalcode,
        
      },
      toAddDetails: {
        dropofCountry: 'US',
        dropofState: 'AL',
       }
    })

  }
  
  public saveShipment(): void {
    this.showQuotes=false;
    this.error=false;
    this.adderror = false;
    this.loading = true;
    this.addressFlag = true;
    
    /* Pass Pickup address data to API*/
    let fromadd = this.bookShipForm.get('fromAddDetails');
    let toAdd = this.bookShipForm.get('toAddDetails');
    this.finalData.address_from_line1 = fromadd.get('pickupAddr').value;   
    this.finalData.address_from_city =  fromadd.get('pickupCity').value;  
    this.finalData.address_from_state = fromadd.get('pickupState').value;   
    this.finalData.address_from_postalcode =  fromadd.get('pickupZip').value;  
    this.finalData.address_from_country = fromadd.get('pickupCountry').value;  


    this.finalData.address_to_line1 = toAdd.get('dropofAddr').value;
    this.finalData.address_to_city = toAdd.get('dropofCity').value;
    this.finalData.address_to_state = toAdd.get('dropofState').value;
    this.finalData.address_to_postalcode = toAdd.get('dropofZip').value;
    this.finalData.address_to_country = toAdd.get('dropofCountry').value;

    this._shipmentquote.getBookData(this.finalData);

    let data = JSON.stringify({"delivery_list": [this.finalData]});

    let reqUrl = 'https://s0020806703trial-trial.apim1.hanatrial.ondemand.com:443/s0020806703trial/http/get_delv_quote_multi_bck/json';//'assets/local/ship-details.json';

  
  /* Call API service to get rates */
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
    }, (error)=> {
        this.loading = false;
        this.error = false;
        this.showQuotes = false;
        this.adderror = true;
    })
  }

  clear() {
    this.error = false;
    this.adderror = false;
    this.showQuotes = false;
    this.loading = false;
    // this.formValues.resetForm();
  }

}
