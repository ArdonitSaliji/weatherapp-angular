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
        cond: this.userLocationWeather.list[i].weather[0].description,
      });
      date.setDate(date.getDate() + 1);
    }
  }

  citySelected: any = sessionStorage.getItem('citySelected');
  // ngOnInit(): void {
  //   this.weatherApi.getUserWeather().subscribe((res: any) => {
  //     this.userLocationWeather = res;
  //     this.getDays();
  //   });
  // }
  getWeather() {
    this.weatherApi
      .getUserWeather()

      .subscribe((res: any) => {
        this.userLocationWeather = res;
        this.getDays();
      });
  }

  ngOnInit(): void {
    if (!this.citySelected) {
      this.getWeather();
    } else {
      this.weatherApi
        .getCityWeather(this.citySelected)
        .subscribe((res: any) => {
          this.weatherApi
            .getCityWeatherData(res[0].lat, res[0].lon)
            .subscribe((res: any) => {
              this.userLocationWeather = res;
              this.getDays();
            });
        });
    }
  }
}
