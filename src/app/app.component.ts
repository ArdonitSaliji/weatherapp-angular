import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'weatherapp-angular';

    constructor(private router: Router) {}

    showNav = false;

    openNavModalEv(): void {
        console.log('fdgsd');
        this.showNav = true;
    }

    closeNavModal(): void {
        console.log('close');
        this.showNav = false;
    }

    isBaseUrl() {
        return this.router.url === '/' || this.router.url === '/location';
    }
}
