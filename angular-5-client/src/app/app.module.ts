import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { CarFindComponent } from './car-find/car-find.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpService } from './http.service';
import { AddEmptyClassDirective } from './add-empty-class.directive';
import { RiderEventListenerDirective } from './rider-event-listener.directive';
import { RiderComponent } from './rider/rider.component';
import { RiderInfoService } from './rider-info.service';
import { ProfileService } from './profile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';


const appRoutes: Routes = [
  {
    path: 'search', component: CarFindComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarFindComponent,
    LoginComponent,
    RegisterComponent,
    AddEmptyClassDirective,
    RiderEventListenerDirective,
    RiderComponent,
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6kttAmqZ9q62UYB5OcPESFKxiXGuPVT0'
    })
  ],
  providers: [HttpService, RiderInfoService, ProfileService],
  bootstrap: [AppComponent]
})

export class AppModule { }
