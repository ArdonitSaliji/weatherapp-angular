import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherComponent } from './today-weather.component';

describe('TodayWeatherComponent', () => {
  let component: TodayWeatherComponent;
  let fixture: ComponentFixture<TodayWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayWeatherComponent]
    });
    fixture = TestBed.createComponent(TodayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
