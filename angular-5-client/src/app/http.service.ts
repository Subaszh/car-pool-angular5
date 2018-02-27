import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  private serverUrl: String = "http://localhost:4000";

  getPlaces() {
    return this.http.get(`${this.serverUrl}/places`);
  }

  findRiders(src, dst) {
    return this.http.get(`${this.serverUrl}/find/${src}/${dst}`);
  }

  constructor(private http: HttpClient) {

  }

}
