import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  

  constructor(
    private router: Router,
    private httpClient: HttpClient

  ) { }

  getUserDetails(){
    // post the details to API server return user info if correct..
     return this.httpClient.get("assets/local/login.json");
  }

  public getQuote(){
    return this.httpClient.get('assets/local/ship-details.json');
  }
}
