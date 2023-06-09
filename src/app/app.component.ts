import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GetLocationService } from './services/get-location.service';
import { Coords } from './models/Coords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weatherapp-angular';

  constructor(
    private router: Router,
    private geoLocation: GetLocationService
  ) {}

  showNav = false;

  openNavModalEv(): void {
    this.showNav = true;
  }

  closeNavModal(): void {
    this.showNav = false;
  }

  isBaseUrl() {
    return this.router.url === '/' || this.router.url === '/location';
  }

  ngOnInit(): void {
    let coords: Coords | undefined = JSON.parse(
      sessionStorage.getItem('coords') as any
    );

    if (!coords) {
      this.geoLocation.getLocation().then((res: any) => {
        sessionStorage.setItem(
          'coords',
          JSON.stringify({
            lat: res.coords.latitude,
            lon: res.coords.longitude,
          })
        );
      });
    }
  }
}
