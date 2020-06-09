import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { DataserviceService } from '../../service/dataservice.service';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  canEditCode: boolean;
  changeCode: boolean;
  public profileData: any;
  public detailItems: any[];
  edit: boolean;
  save: boolean;
  items : any;

  constructor(
    private httpClient: HttpClient,
    private _UserName: DataserviceService
    ) { }

   


  ngOnInit() {
    this.edit = true;
    this.save = false;
    this.detailItems = this._UserName.userDetails;
    console.log("Hello", this.detailItems);

    // this.httpClient.get(this.reqURL).subscribe(resp=> {
    //   this.profileData = resp;
    //   console.log("Hello", this.profileData.userdetails);
    //   // this.detailItems = this.profileData.userdetails;
    // })
  }

  titleCaseWord(items: any){
    console.log(items);
    return items[0].toUpperCase() + items.substr(1).toLowerCase();

  }

  public editProfile(items:any) {
    this.edit = false;
    this.save = true;
    items.canEditCode =true;
    items.changeCode = true;
  }

  public saveProfile(items:any)  { 
    let reqURL = 'https://v2-api.sheety.co/abad2b72fac02e07a97e26f8ff7d83bd/shipGenieEcoservity/users';
    
      this.edit = true;
      this.save = false;
      items.canEditCode =false;
      items.changeCode = false;

      let responseBody = JSON.stringify({
        "user": {
          [items.key] : items.name
        }
      }) 

      console.log(reqURL+'/'+items.id)
      return this.httpClient.put(reqURL+'/'+items.id, responseBody , {
        headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }).set('Authorization','Basic c2ctZGV2OnNnZGV2MTIz')

      }).subscribe(resp => {
        console.log(resp)
      })
 
  }

  

  // public focusOut(items:any){
  //   this.edit = true;
  //   this.save = false;
  //   items.canEditCode =false;
  //   items.changeCode = false;
  //   let userID = items.id;
  //   this._UserName.getUserName(items.name);

    
  //   this.httpClient.post(this.reqURL, this.detailItems);
  //   // this.httpClient.get(this.reqURL).subscribe(respo=> {
  //   // })
  // }

}
