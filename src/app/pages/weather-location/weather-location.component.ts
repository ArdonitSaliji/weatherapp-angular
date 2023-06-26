import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
//
export class WeatherLocationComponent {
  constructor(private weatherApi: WeatherApiService, public router: Router) {}
  userLocationWeather: any = [];

  ngOnInit(): void {
    this.weatherApi.getUserWeather().subscribe((res: any) => {
      this.userLocationWeather.push(res);
      this.getCities();
    });
  }

  getCities() {
    this.weatherApi.getUserCities().subscribe((res: any) => {
      res.body?.cities &&
        res.body.cities.map((city: any) => {
          this.weatherApi
            .getCityWeather(city.cityName)
            .subscribe((res: any) => {
              this.weatherApi
                .getCityWeatherData(res[0].lat, res[0].lon)
                .subscribe((res: any) => {
                  this.userLocationWeather.push(res);
                });
            });
        });
    });
  }

  cityWeather(data: any) {
    this.weatherApi.getCityWeather(data).subscribe((res: any) => {
      this.weatherApi
        .getCityWeatherData(res[0].lat, res[0].lon)
        .subscribe((res: any) => {
          this.userLocationWeather.push(res);
          this.weatherApi.saveCity(data).subscribe();
        });
    });
  }

  deleteCity({ cityName, event }: { cityName: any; event: any }) {
    event.target.parentElement.parentElement.remove();
    this.weatherApi.deleteCity(cityName).subscribe();
  }
}
