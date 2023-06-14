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
    });

    date.setDate(date.getDate() + 1);
    this.days.push({
      day: date.toLocaleDateString('en-US', options),
      weather: this.userLocationWeather.list[1].main,
    });

    date.setDate(date.getDate() + 1);
    this.days.push({
      day: date.toLocaleDateString('en-US', options),
      weather: this.userLocationWeather.list[2].main,
    });
  }

  // formatData(data: any) {
  //   data.list.map((day: any) => {
  //     day.main.temp = Math.round(day.main.temp);
  //     day.main.temp_min = Math.round(day.main.temp_min);
  //     day.main.temp_max = Math.round(day.main.temp_max);
  //   });
  // }

  getWeather() {
    this.weatherApi
      .getUserWeather()

      .subscribe((res: any) => {
        console.log(res);
        this.userLocationWeather = res;
        this.getDays();
      });
  }

  ngOnInit(): void {
    this.getWeather();
  }
}
