import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day10WeatherComponent } from './day10-weather.component';

describe('Day10WeatherComponent', () => {
  let component: Day10WeatherComponent;
  let fixture: ComponentFixture<Day10WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day10WeatherComponent]
    });
    fixture = TestBed.createComponent(Day10WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
