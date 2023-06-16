import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GetLocationService {
  constructor(private router: Router) {}

  getLocation() {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
        this.router.navigateByUrl('/home');
      } else {
        reject(new Error('No support for geolocation'));
      }
    });
  }
}
