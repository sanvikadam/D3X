import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './login-validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  error : boolean;

  form = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get username() {
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  constructor(
    private dataService: DataserviceService,
    private router: Router,
    private httpClient: HttpClient

    ) { }

  ngOnInit() {
    this.error=false;
  }

  closePopup() {
    console.log('are u in');
    this.error=false
  }

  loginUser(values){
    let userName = values.username;
    let pswd = values.password;
    let reqURL = 'https://v2-api.sheety.co/abad2b72fac02e07a97e26f8ff7d83bd/shipGenieEcoservity/users?loginId='+userName;
    console.log(reqURL);
    this.httpClient.get<any>(reqURL, {
                 headers: new HttpHeaders().set('Authorization','Basic c2ctZGV2OnNnZGV2MTIz')})
                .subscribe(resp=> {
                  console.log(resp.users);
                  let response = resp.users;
                  if(response.length==0) {
                    this.error = true;
                    this.form.reset();

                  } else if (response.length>0) {
                    let respUser = response[0].loginId;
                    let resPswd = response[0].password;

                    if(resPswd!=pswd) {
                      this.error = true;
                      this.password.reset();
                    } else {
                      this.error = false;
                      console.log(response);
                      
                      localStorage.setItem('user', JSON.stringify(response));
                      
                      return this.router.navigate(['dashboard/create-shipment']);
                    }
                  }
                })
                }
}