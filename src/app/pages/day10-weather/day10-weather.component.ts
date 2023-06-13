import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetLocationService } from 'src/app/services/get-location.service';

@Component({
  selector: 'app-day10-weather',
  templateUrl: './day10-weather.component.html',
  styleUrls: ['./day10-weather.component.scss'],
})
export class Day10WeatherComponent implements OnInit {
  constructor(private geoLocation: GetLocationService) {}
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
    // if (this.geoLocation.weatherInformation.length > 0) {
    //   this.geoLocation.getLocation(this.weatherApi.getUserWeather);
    // }
    this.geoLocation.weatherAPIResult
      .pipe<any>(
        map((data) => {
          data.list.map((day: any) => {
            day.main.temp = Math.round(day.main.temp);
            day.main.temp_min = Math.round(day.main.temp_min);
            day.main.temp_max = Math.round(day.main.temp_max);
          });

          return data;
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.userLocationWeather = res;
      });
    this.getDays();
  }
}
