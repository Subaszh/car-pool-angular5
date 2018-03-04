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

  login(user) {
    return this.http.post(`${this.serverUrl}/login`, { user }, {
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  register(user) {
    return this.http.post(`${this.serverUrl}/register`, { user }, {
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  constructor(private http: HttpClient) {

  }

}
