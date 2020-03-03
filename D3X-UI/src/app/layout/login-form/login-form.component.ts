import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../../service/loginauth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private Auth: LoginauthService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
     const target = e.target;
     const userName = target.querySelector('#username').value;
     const password = target.querySelector('#password').value;
     console.log(userName +" and " +password);

     this.Auth.getUserDetails(userName, password);

    //this.http.post('http://localhost:4200/login.json', {})
  }

}
