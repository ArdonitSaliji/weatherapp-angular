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

    isBaseUrl() {
        return this.router.url === '/';
    }
}
