import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataserviceService } from '../../service/dataservice.service';

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

  constructor(
    private httpClient: HttpClient,
    private _UserName: DataserviceService
    ) { }

  public reqURL = 'assets/local/profile-details.json'; 

  ngOnInit() {
    this.httpClient.get(this.reqURL).subscribe(resp=> {
      this.profileData = resp;
      console.log("Profile data : " +JSON.stringify(this.profileData.userdetails));
      this.detailItems = this.profileData.userdetails;
    })
  }

  public editProfile(items:any) {
    console.log("hrrtrt", items);
    items.canEditCode =true;
    items.changeCode = true;
  }

  public focusOut(items:any){
    items.canEditCode =false;
    items.changeCode = false;
    console.log(items);
    let userID = items.id;
    console.log(userID);
    console.log(this.detailItems);

    this._UserName.getUserName(items.name);

    
    this.httpClient.post(this.reqURL, this.detailItems);
    this.httpClient.get(this.reqURL).subscribe(respo=> {
      console.log("Response: ",respo);
    })
  }

}
