import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { GetLocationService } from 'src/app/services/get-location.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
export class WeatherLocationComponent {
  constructor(
    private geoLocation: GetLocationService,
    private datePipe: DatePipe
  ) {}
  userLocationWeather: any = [];

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
          data.list[0].main.feels_like = Math.round(
            data.list[0].main.feels_like
          );
          data.city.sunrise = this.datePipe.transform(
            new Date(data.city.sunrise * 1000),
            'h:mm'
          );
          data.city.sunset = this.datePipe.transform(
            new Date(data.city.sunset * 1000),
            'h:mm'
          );
          return data;
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.userLocationWeather = res;
      });
  }
}
