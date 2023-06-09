import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityComponent } from './weather-city.component';

describe('WeatherCityComponent', () => {
  let component: WeatherCityComponent;
  let fixture: ComponentFixture<WeatherCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCityComponent]
    });
    fixture = TestBed.createComponent(WeatherCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
