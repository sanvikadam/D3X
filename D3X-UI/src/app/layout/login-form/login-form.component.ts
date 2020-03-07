import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  credentials: any = [];

  constructor(
    private Auth: DataserviceService,
    private router: Router

    ) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
     const target = e.target;
     const userName = target.querySelector('#username').value;
     const password = target.querySelector('#password').value;
     console.log(userName +" and " +password);

     const mydata = this.Auth.getUserDetails();
     mydata.subscribe(data=> {
      this.credentials = data;
      if(this.credentials.username == userName && this.credentials.password == password) {
        //window.alert('You have success');
         return this.router.navigate(['/profile'])
      } else {
        window.alert('You have failed');
      }
    })
  }
}
