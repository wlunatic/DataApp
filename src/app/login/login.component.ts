import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { User } from '../_model/user_data';
import { DatePipe } from '@angular/common';
import { UserdataService } from '../_services';
import {formatDate} from '@angular/common';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DatePipe]
})

export class LoginComponent implements OnInit {

  user_data: User[];
  myDate = new Date();
  newDate = formatDate(this.myDate, 'yyyy-MM-dd', 'en-US');

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _userData: UserdataService) { }

  username: string;
  password: string;

  user = new User("", "");

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      username: "",
      password: ""
    });
  }

  login() : void {
    this.username = this.loginForm.get("username").value;
    this.password = this.loginForm.get("password").value;

    if(this.username == 'admin' && this.password =='admin'){
      this.router.navigate(["overview"]);
    }   
    else{
      this.router.navigate(["site"]);
      this.user.username = this.username;
      this.user.login_date = this.newDate;
      console.log(this.user);
      
      this._userData.store(this.user)
        .subscribe(
          (res: User[]) => {
            this.user_data = res;
      })
    }




    // console.log(this.user_data);

  }
}
