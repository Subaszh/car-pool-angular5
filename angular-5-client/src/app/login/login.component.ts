import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, RouterLink } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  loginValidation = '';

  constructor(private http: HttpService, private router: Router, private profile: ProfileService) {
  }

  ngOnInit() {
  }

  login() {
    this.http.login(this.user)
      .subscribe((res: any) => {
        if (res.status === 'ok') {
          this.profile.info = res.user;
          this.router.navigate(['search']);
        } else {
          this.loginValidation = "* Unable to login with Email/Password";
        }
      })
  }

}
