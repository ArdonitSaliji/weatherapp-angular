import { Component, OnInit } from '@angular/core';
import { Coords } from 'src/app/models/Coords';
import { Forecast } from 'src/app/models/Forecast';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-specs',
  templateUrl: './weather-specs.component.html',
  styleUrls: ['./weather-specs.component.scss'],
})
export class WeatherSpecsComponent implements OnInit {
  constructor(private weatherApi: WeatherApiService) {}

  userLocationWeather!: Forecast;

  citySelected: Coords | undefined = JSON.parse(
    sessionStorage.getItem('citySelected') as any
  );

  sunrise!: string | null;
  sunset!: string | null;
  windSpeed!: number;
  rainAmount!: number | string;
  feelsLike!: number;
  humidity!: number | undefined;

  getWeather() {
    this.weatherApi.getUserWeather().subscribe((res: Forecast) => {
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
        .getCityWeatherData(this.citySelected.lat, this.citySelected.lon)
        .subscribe((res: Forecast) => {
          this.userLocationWeather = res;
          this.updateVariables();
        });
    }
  }
  //
}
