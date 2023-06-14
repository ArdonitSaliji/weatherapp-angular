import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { GetLocationService } from 'src/app/services/get-location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-specs',
  templateUrl: './weather-specs.component.html',
  styleUrls: ['./weather-specs.component.scss'],
})
export class WeatherSpecsComponent {
  constructor(
    private weatherApi: WeatherApiService,
    private datePipe: DatePipe
  ) {}
  userLocationWeather!: any;

  ngOnInit(): void {
    this.weatherApi.getUserWeather().subscribe((res: any) => {
      this.userLocationWeather = res;
    });
  }
}
