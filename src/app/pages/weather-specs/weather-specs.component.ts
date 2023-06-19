import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-specs',
  templateUrl: './weather-specs.component.html',
  styleUrls: ['./weather-specs.component.scss'],
})
export class WeatherSpecsComponent implements OnInit {
  constructor(private weatherApi: WeatherApiService) {}

  userLocationWeather: any;
  citySelected: any = sessionStorage.getItem('citySelected');

  sunrise: any;
  sunset: any;
  windSpeed: any;
  rainAmount: any;
  feelsLike: any;
  humidity: any;

  getWeather() {
    this.weatherApi.getUserWeather().subscribe((res: any) => {
      this.userLocationWeather = res;
      this.updateVariables();
    });
  }

  updateVariables() {
    if (this.userLocationWeather) {
      const city = this.userLocationWeather.city;
      const firstWeatherItem = this.userLocationWeather.list[0];
      const Wind = firstWeatherItem.wind;
      const rain = firstWeatherItem.rain;
      const main = firstWeatherItem.main;
      this.sunrise = city.sunrise;
      this.sunset = city.sunset;
      this.windSpeed = Wind.speed;
      this.rainAmount = rain ? rain['3h'] : '0';
      this.feelsLike = main.feels_like;
      this.humidity = main.humidity;
    }
  }

  ngOnInit(): void {
    if (!this.citySelected) {
      this.getWeather();
    } else {
      this.weatherApi
        .getCityWeather(this.citySelected)
        .subscribe((res: any) => {
          const lat = res[0].lat;
          const lon = res[0].lon;
          this.weatherApi.getCityWeatherData(lat, lon).subscribe((res: any) => {
            this.userLocationWeather = res;
            this.updateVariables();
          });
        });
    }
  }
  //
}
