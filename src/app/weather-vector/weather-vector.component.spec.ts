import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherVectorComponent } from './weather-vector.component';

describe('WeatherVectorComponent', () => {
  let component: WeatherVectorComponent;
  let fixture: ComponentFixture<WeatherVectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherVectorComponent]
    });
    fixture = TestBed.createComponent(WeatherVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
