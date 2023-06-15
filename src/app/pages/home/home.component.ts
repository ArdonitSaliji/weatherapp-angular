import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { GetLocationService } from 'src/app/services/get-location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private geoLocation: GetLocationService,
    private weatherApi: WeatherApiService
  ) {}
  userLocationWeather!: any;
  days: any = [];

  getDays() {
    const date = new Date();
    const options: any = { weekday: 'long' };
    this.days.push({
      day: 'Today',
      weather: this.userLocationWeather.list[0].main,
      cond: this.userLocationWeather.list[0].weather[0].description,
    });
    console.log(this.userLocationWeather);
    date.setDate(date.getDate() + 1);
    this.days.push({
      day: date.toLocaleDateString('en-US', options),
      weather: this.userLocationWeather.list[1].main,
      cond: this.userLocationWeather.list[1].weather[0].description,
    });

    date.setDate(date.getDate() + 1);
    this.days.push({
      day: date.toLocaleDateString('en-US', options),
      weather: this.userLocationWeather.list[2].main,
      cond: this.userLocationWeather.list[2].weather[0].description,
    });
  }

  getWeather() {
    this.weatherApi
      .getUserWeather()

      .subscribe((res: any) => {
        console.log(res);
        this.userLocationWeather = res;
        this.getDays();
      });
  }

  citySelected: any = sessionStorage.getItem('citySelected');

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
