import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { GetLocationService } from 'src/app/services/get-location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
export class WeatherLocationComponent {
  constructor(
    private geoLocation: GetLocationService,
    private datePipe: DatePipe,
    private weatherApi: WeatherApiService
  ) {}
  userLocationWeather: any = [];

  ngOnInit(): void {
    this.weatherApi.getUserWeather().subscribe((res: any) => {
      this.userLocationWeather = res;
    });
  }

  cityWeather(data: any) {
    this.weatherApi.getCity(data).subscribe((res: any) => {
      this.weatherApi
        .getCityWeatherData(res[0].lat, res[0].lon)
        .subscribe((res: any) => {
          console.log(res);
        });
    });
  }
}
