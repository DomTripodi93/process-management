import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Signin } from './signin.model';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  error = "";
  isError = false;
  @ViewChild('data') signinForm: NgForm;
  user: Signin;


  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  onSubmit(){
    this.isError = false;
    this.auth.signinUser(this.signinForm.value)
    .subscribe(
      (responseData) => {
        this.auth.token = responseData.body['token'];
        localStorage.setItem('token', responseData.body['token']);
        this.auth.user = responseData.body["id"]
        this.auth.apiUrl = this.auth.authApiUrl + "/" + this.auth.user;
        localStorage.setItem('id', responseData.body["id"]);
        if (this.auth.user) {
          this.auth.isAuthenticated = true;
          this.auth.authChanged.next();
          this.router.navigate(["department"]);
        }
      },() => {
        this.isError = true
        this.error = "This Email and Password combination is invalid!";
      }
    );
  }


}