import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { RiderInfoService } from '../rider-info.service';

@Component({
  selector: 'app-car-find',
  templateUrl: './car-find.component.html',
  styleUrls: ['./car-find.component.scss']
})

export class CarFindComponent implements OnInit {
  public mapCenter;
  public zoom;
  public places;
  public source: String;
  public destination: String;
  public showRideConfirmation: Boolean = false;
  public selectedRider = {};
  public riders = [];

  constructor(private http: HttpService, private rideInfo: RiderInfoService) {
    this.mapCenter = {
      lat: 12.9716,
      lng: 77.5946
    }
    this.zoom = 12;
  }

  ngOnInit() {
    this.http.getPlaces()
      .subscribe(places => this.places = places);
    this.rideInfo.riderOnConfirm.subscribe((rider) => {
      this.confirmRider(rider);
    })
  }

  findRiders() {
    this.http.findRiders(this.source, this.destination)
      .subscribe((riders: any[]) => {
        this.riders.length = 0;
        this.riders.push.call(this.riders, ...riders);
      });
  }

  confirmRider(rider) {
    this.selectedRider = rider;
    this.showRideConfirmation = true;
  }

}
