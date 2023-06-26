import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coords } from 'src/app/models/Coords';
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
            .getCityWeatherData(city.cityCoords.lat, city.cityCoords.lon)
            .subscribe((res: any) => {
              this.userLocationWeather.push(res);
            });
        });
    });
  }

  cityWeather(data: string) {
    this.weatherApi.getCityWeather(data).subscribe((res: any) => {
      this.weatherApi.getCityWeatherData(res[0].lat, res[0].lon).subscribe((res2: any) => {
        this.userLocationWeather.push(res2);
        this.weatherApi
          .saveCity({ lat: Number(res[0].lat.toFixed(4)), lon: Number(res[0].lon.toFixed(4)) })
          .subscribe();
      });
    });
  }

  deleteCity({ cityCoords, event }: { cityCoords: Coords; event: any }) {
    event.target.parentElement.parentElement.remove();
    let citySelected: Coords = JSON.parse(sessionStorage.getItem('citySelected') as any);

    if (cityCoords.lat === citySelected.lat && cityCoords.lon === citySelected.lon) {
      sessionStorage.removeItem('citySelected');
    }

    this.weatherApi.deleteCity(cityCoords).subscribe();
  }
}
