import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[add-empty-class]'
})

export class AddEmptyClassDirective {
  private classList;

  constructor(private ele: ElementRef, private ngModel: NgModel) {
    this.classList = this.ele.nativeElement.classList;
  }

  @HostListener('focus') onFocus() {
    if (!this.classList.contains('pull-up')) {
      this.classList.add('pull-up');
    }
  }

  @HostListener('blur') onBlur() {
    if (this.ele.nativeElement.value.length === 0) {
      this.ele.nativeElement.classList.remove('pull-up')
    }
  }
}
