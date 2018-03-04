import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public info: any;

  constructor(private profile: ProfileService, private router: Router) {
    this.info = this.profile.info;
  }

  ngOnInit() {
    if (this.info.fullName === undefined) {
      this.router.navigate(['login']);
    }
  }
}
