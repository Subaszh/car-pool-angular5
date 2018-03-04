import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../login/login.component.scss']
})

export class RegisterComponent implements OnInit {
  newUser = {
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    password_d: ''
  }
  public registerValidation: String = '';

  constructor(private http: HttpService, private router: Router, private profile: ProfileService) { }

  register() {
    this.http.register(this.newUser)
      .subscribe((res: any) => {
        if (res.status === 'ok') {
          this.profile.info = this.newUser;
          this.router.navigate(['search']);
        } else {
          this.registerValidation = "* Unable to login with Email/Password";
        }
      });
  }

  ngOnInit() {
  }
}
