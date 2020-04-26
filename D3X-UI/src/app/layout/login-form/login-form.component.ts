import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './login-validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',[Validators.required, UsernameValidator.nameValidate('test')]),
    password: new FormControl('', [Validators.required, UsernameValidator.passwordValidate('12345')])
  });

  get username() {
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  name : string;
  pswd : string;

  constructor(
    private Auth: DataserviceService,
    private router: Router,
    private httpClient: HttpClient

    ) { }

  ngOnInit() {}

  loginUser(){
    return this.router.navigate(['dashboard/create-shipment']);
  }
}