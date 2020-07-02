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
  public detailItems: {};
  public getUser: any = {};

  editButton: any[] = [];
  saveButton: any[] = [];
  showField: any[] = [];
  editField: any[] = [];
  items : any;

  constructor(
    private httpClient: HttpClient,
    private _UserName: DataserviceService
    ) { }

  ngOnInit() {
    this.getUser = JSON.parse(localStorage.getItem('user'));
    
    this.detailItems = [
        {"id": this.getUser[0].id, "key": "firstName", "title": "Customer First Name", "name": this.getUser[0].firstName},
        {"id": this.getUser[0].id, "key": "lastName", "title": "Customer Last Name", "name": this.getUser[0].lastName},
        {"id": this.getUser[0].id, "key": "loginId", "title": "Username", "name": this.getUser[0].loginId},
        {"id": this.getUser[0].id, "key": "phoneWork", "title": "Primary Phone", "name": this.getUser[0].phoneWork},
        {"id": this.getUser[0].id, "key": "addressEmail", "title": "Email", "name": this.getUser[0].addressEmail},
        {"id": this.getUser[0].id, "key": "addressLine1", "title": "Primary Address", "name": this.getUser[0].address}
      ]
  }

  titleCaseWord(items: any){
    return items[0].toUpperCase() + items.substr(1).toLowerCase();
  }

  public editProfile(index:any) {
    this.editButton[index]=true;
    this.saveButton[index]=true;
    this.showField[index] =true;
    this.editField[index] = true;
  }

  public saveProfile(index:any, keyName: string, name:string, items: any)  {
    this.getUser[0][keyName] = name;
    localStorage.setItem('user', JSON.stringify(this.getUser));
    this._UserName.getUserDetails(this.getUser);
    let reqURL = 'https://v2-api.sheety.co/abad2b72fac02e07a97e26f8ff7d83bd/shipGenieEcoservity/users';
    
    this.editButton[index]=false;
    this.saveButton[index]=false;

    this.showField[index] =false;
    this.editField[index] = false;

      let responseBody = JSON.stringify({
        "user": {
          [items.key] : items.name
        }
      }) 

      return this.httpClient.put(reqURL+'/'+items.id, responseBody, {
        headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }).set('Authorization','Basic c2ctZGV2OnNnZGV2MTIz')

      }).subscribe(resp => {
        
        // console.log("Response: ",resp.user.id)

      }) 
  }
}
