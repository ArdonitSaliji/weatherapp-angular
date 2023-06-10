import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocationComponent } from './weather-location.component';

describe('WeatherLocationComponent', () => {
  let component: WeatherLocationComponent;
  let fixture: ComponentFixture<WeatherLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherLocationComponent]
    });
    fixture = TestBed.createComponent(WeatherLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
