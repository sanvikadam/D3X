import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('loginForm', {static: false}) public createLoginForm: NgForm;

  credentials: any = [];
  name: string="";
  password: string="";

  constructor(
    private Auth: DataserviceService,
    private router: Router,

    ) { }

  ngOnInit() {
  }

  loginUser(data){

      this.Auth.getUserDetails().subscribe((resp:any)=> {
      if(resp.username==data.name && resp.password==data.password) {
        return this.router.navigate(['dashboard']);
      } else {
        window.alert('Usernam or Password maybe incorrect');
        this.createLoginForm.reset();
      }
    })
  }
}
