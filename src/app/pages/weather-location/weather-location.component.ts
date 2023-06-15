import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { GetLocationService } from 'src/app/services/get-location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
export class WeatherLocationComponent {
  constructor(private weatherApi: WeatherApiService, private router: Router) {}
  userLocationWeather: any = [];

  ngOnInit(): void {
    this.weatherApi.getUserWeather().subscribe((res: any) => {
      this.userLocationWeather.push(res);

      this.getCities();
    });
  }

  getCities() {
    this.weatherApi.getUserCities().subscribe((res: any) => {
      console.log(res);
      res.body?.cities &&
        res.body?.cities?.map((city: any) => {
          this.weatherApi.getCity(city.cityName).subscribe((res: any) => {
            this.weatherApi.getCityData(res[0]).subscribe((res: any) => {
              this.userLocationWeather = [...this.userLocationWeather, res];
            });
          });
        });
    });
  }

  cityWeather(data: any) {
    this.weatherApi.getCity(data).subscribe((res: any) => {
      this.weatherApi
        .getCityWeatherData(res[0].lat, res[0].lon)
        .subscribe((res: any) => {
          this.userLocationWeather.push(res);
          console.log(res);
          this.weatherApi.saveCity(data).subscribe((res: any) => {});
        });
    });
  }

  deleteCity(cityName: any) {
    this.weatherApi.deleteCity(cityName).subscribe((res) => {
      // console.log(res)
    });
  }
}
