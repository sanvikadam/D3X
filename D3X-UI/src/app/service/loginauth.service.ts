import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginauthService {
  credentials: any = [];

  constructor(
    private router:Router,
    private httpClient: HttpClient
    ) { }

  getUserDetails(userName, passWord){
    //console.log(userName+ " and " +userName);

    // post the details to API server return user info if correct..
     return this.httpClient.get("assets/local/login.json").subscribe(data=> {
      this.credentials = data;
      if(this.credentials.username == userName && this.credentials.password == passWord) {
        //window.alert('You have success');
         return this.router.navigate(['/profile'])
      } else {
        window.alert('You have failed');
      }
    })
  }
}
