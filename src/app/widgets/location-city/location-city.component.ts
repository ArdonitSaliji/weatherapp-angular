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
  showCityWeather(name: any) {
    sessionStorage.setItem('citySelected', JSON.stringify(name));
    this.router.navigateByUrl('/home');
  }

  deleteCity(cityName: any) {
    console.log('emit');
    this.delCity.emit(cityName);
  }
}
