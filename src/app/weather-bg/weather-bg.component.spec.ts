import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBgComponent } from './weather-bg.component';

describe('WeatherBgComponent', () => {
  let component: WeatherBgComponent;
  let fixture: ComponentFixture<WeatherBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherBgComponent]
    });
    fixture = TestBed.createComponent(WeatherBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
