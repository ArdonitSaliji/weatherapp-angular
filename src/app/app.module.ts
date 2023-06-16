import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherSpecsComponent } from './pages/weather-specs/weather-specs.component';
import { WeatherLocationComponent } from './pages/weather-location/weather-location.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForecastDayComponent } from './widgets/forecast-day/forecast-day.component';
import { Day10WeatherComponent } from './pages/day10-weather/day10-weather.component';
import { WeatherBgComponent } from './components/weather-bg/weather-bg.component';
import { WeatherCityComponent } from './widgets/weather-city/weather-city.component';
import { CompassSvgComponent } from './widgets/compass-svg/compass-svg.component';
import { WeatherVectorComponent } from './widgets/weather-vector/weather-vector.component';
import { TempBarComponent } from './widgets/temp-bar/temp-bar.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './pages/auth/auth.module';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarComponent } from './widgets/search-bar/search-bar.component';
import { LocationCityComponent } from './widgets/location-city/location-city.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NavModalComponent } from './components/nav-modal/nav-modal.component';
import { CommonModule, DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        WeatherSpecsComponent,
        WeatherLocationComponent,
        FooterComponent,
        ForecastDayComponent,
        Day10WeatherComponent,
        WeatherBgComponent,
        WeatherCityComponent,
        CompassSvgComponent,
        WeatherVectorComponent,
        TempBarComponent,
        SearchBarComponent,
        LocationCityComponent,
        NavModalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AuthModule,
        HttpClientModule,
        MatIconModule,
        CommonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
    ],
    providers: [CookieService, DatePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
