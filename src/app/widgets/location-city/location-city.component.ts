import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Coords } from 'src/app/models/Coords';

@Component({
  selector: 'app-location-city',
  templateUrl: './location-city.component.html',
  styleUrls: ['./location-city.component.scss'],
})
export class LocationCityComponent {
  @Input('weather') weather!: any;
  @Output() delCity = new EventEmitter();
  constructor(private router: Router, private datePipe: DatePipe) {}

  coords: Coords = JSON.parse(sessionStorage.getItem('coords') as any);

  formattedTime!: any;

  get isMyLocation() {
    console.log(this.weather);

    return (
      this.weather.city.coord.lat === this.coords.lat &&
      this.weather.city.coord.lon === this.coords.lon
    );
  }

  showCityWeather(event: any) {
    if (event.target.id === 'span') {
      if (confirm('Are you sure?')) {
        this.delCity.emit({ cityCoords: this.weather.city.coord, event: event });
      }
    } else {
      sessionStorage.setItem('citySelected', JSON.stringify(this.weather.city.coord));
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
    const timeZoneShift = this.weather?.city.timezone;
    this.formattedTime = this.datePipe.transform(new Date(timeZoneShift * 1000), 'h:mm a');
    const currentTime = new Date();
    const utcTime = new Date(currentTime.getTime() + timeZoneShift * 1000);
    this.formattedTime = this.datePipe.transform(utcTime, 'h:mm a', 'UTC');
  }
}
