import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  from,
  map,
  throwError,
} from 'rxjs';
import * as weatherAPIResult from 'src/assets/forecast40.json';

@Injectable({
  providedIn: 'root',
})
export class GetLocationService {
  constructor() {}
  location: any = {};

  getCords() {
    return this.getLocation().then((position) => position.coords);
  }

  getLocation() {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('No support for geolocation'));
      }
    });
  }
}
