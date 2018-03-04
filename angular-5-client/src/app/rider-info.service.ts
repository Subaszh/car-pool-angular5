import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RiderInfoService {
  public riderOnHover: EventEmitter<any> = new EventEmitter();
  public riderOnLeave: EventEmitter<any> = new EventEmitter();
  public riderOnConfirm: EventEmitter<any> = new EventEmitter();
  constructor() { }

}
