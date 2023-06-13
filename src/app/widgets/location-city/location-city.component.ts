import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-city',
  templateUrl: './location-city.component.html',
  styleUrls: ['./location-city.component.scss'],
})
export class LocationCityComponent {
  @Input('weather') weather: any;
}
