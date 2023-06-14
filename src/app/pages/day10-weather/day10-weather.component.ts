import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetLocationService } from 'src/app/services/get-location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-day10-weather',
  templateUrl: './day10-weather.component.html',
  styleUrls: ['./day10-weather.component.scss'],
})
export class Day10WeatherComponent implements OnInit {
  constructor(
    private geoLocation: GetLocationService,
    private weatherApi: WeatherApiService
  ) {}
  userLocationWeather: any = [];
  days: any = [];

  getDays() {
    const date = new Date();
    const options: any = { weekday: 'long' };
    for (let i = 0; i < 11; i++) {
      this.days.push({
        day: i === 0 ? 'Today' : date.toLocaleDateString('en-US', options),
        weather: this.userLocationWeather.list[i].main,
      });
      date.setDate(date.getDate() + 1);
    }
  }

  ngOnInit(): void {
    this.weatherApi.getUserWeather().subscribe((res: any) => {
      this.userLocationWeather = res;
      this.getDays();
    });
  }
}
