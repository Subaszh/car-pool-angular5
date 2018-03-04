import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { RiderInfoService } from '../rider-info.service';

@Component({
  selector: 'rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})

export class RiderComponent {
  @Input() rider: any;
  @Input() onRiderSelect: Function;

  @Output() openMarker: EventEmitter<any> = new EventEmitter();
  @Output() closeMarker: EventEmitter<any> = new EventEmitter();

  constructor(private riderInfoService: RiderInfoService) { }

  @HostListener('mouseenter') openEvent() {
    this.riderInfoService.riderOnHover.emit(this.rider);
  }

  @HostListener('mouseleave') closeEvent() {
    this.riderInfoService.riderOnLeave.emit(this.rider);
  }

  selectRider() {
    this.riderInfoService.riderOnConfirm.emit(this.rider);
  }
}
