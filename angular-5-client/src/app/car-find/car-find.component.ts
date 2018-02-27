import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-car-find',
  templateUrl: './car-find.component.html',
  styleUrls: ['./car-find.component.scss']
})

export class CarFindComponent implements OnInit {
  public mapCenter;
  public zoom;
  public places;
  public source;
  public destination;
  public riders = [];

  constructor(private http: HttpService) {
    this.mapCenter = {
      lat: 12.9716,
      lng: 77.5946
    }

    this.zoom = 10;
  }

  ngOnInit() {
    this.http.getPlaces()
      .subscribe(places => this.places = places);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  findRiders() {
    this.http.findRiders(this.source, this.destination)
      .subscribe((riders) => (this.riders = riders));
  }

}
