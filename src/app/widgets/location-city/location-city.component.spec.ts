import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCityComponent } from './location-city.component';

describe('LocationCityComponent', () => {
  let component: LocationCityComponent;
  let fixture: ComponentFixture<LocationCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationCityComponent]
    });
    fixture = TestBed.createComponent(LocationCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
