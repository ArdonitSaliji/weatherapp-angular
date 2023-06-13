import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as weatherAPIResult from 'src/assets/forecast40.json';

@Injectable({
  providedIn: 'root',
})
export class GetLocationService {
  weatherInformation = [];

  weatherAPIResult: BehaviorSubject<any> = new BehaviorSubject<any>(
    weatherAPIResult
  );

  constructor() {}

  getLocation(getUserWeather: any): any {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
        getUserWeather(lat, lon);
      });
    } else {
      console.log('No support for geolocation');
    }
  }
}
