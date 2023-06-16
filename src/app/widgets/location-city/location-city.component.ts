import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-city',
  templateUrl: './location-city.component.html',
  styleUrls: ['./location-city.component.scss'],
})
export class LocationCityComponent {
  @Input('weather') weather: any;
  @Output() delCity = new EventEmitter();
  constructor(private router: Router) {}

  showCityWeather(event: any, name: any) {
    if (event.target.id === 'span') {
      if (confirm('Are you sure')) {
        this.delCity.emit({ cityName: this.weather.city.name, event: event });
      }
    } else {
      sessionStorage.setItem('citySelected', JSON.stringify(name));
      this.router.navigateByUrl('/home');
    }
  }
}
