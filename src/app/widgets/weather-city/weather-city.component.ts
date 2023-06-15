import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss'],
})
export class WeatherCityComponent {
  @Input('weather') weather!: any;
}
