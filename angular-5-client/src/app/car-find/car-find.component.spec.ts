import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFindComponent } from './car-find.component';

describe('CarFindComponent', () => {
  let component: CarFindComponent;
  let fixture: ComponentFixture<CarFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
