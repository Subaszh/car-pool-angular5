import { Directive, ElementRef, ContentChildren, QueryList, Input } from '@angular/core';
import { AgmInfoWindow } from '@agm/core';
import { RiderInfoService } from './rider-info.service';

@Directive({
  selector: '[appRiderEventListener]'
})

export class RiderEventListenerDirective {
  @ContentChildren(AgmInfoWindow) infoWindow: QueryList<AgmInfoWindow> = new QueryList<AgmInfoWindow>();
  public showWindow: boolean = false;

  constructor(private el: ElementRef, private riderInfoService: RiderInfoService) {
    console.log(el);
  }

  @Input() rider: any;
  ngOnInit() {
    this.riderInfoService.riderOnHover
      .subscribe((riderOnHover) => {
        if (this.rider.name === riderOnHover.name) {
          this.infoWindow.forEach((infoWindow) => infoWindow.open());
        }
      });
    this.riderInfoService.riderOnLeave
      .subscribe((riderOnLeave) => {
        if (this.rider.name === riderOnLeave.name) {
          this.infoWindow.forEach((infoWindow) => infoWindow.close());
        }
      });
  }

}

