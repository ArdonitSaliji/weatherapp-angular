import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherSpecsComponent } from './pages/weather-specs/weather-specs.component';
import { WeatherLocationComponent } from './pages/weather-location/weather-location.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ForecastDayComponent } from './widgets/forecast-day/forecast-day.component';
import { Day10WeatherComponent } from './pages/day10-weather/day10-weather.component';
import { WeatherBgComponent } from './widgets/weather-bg/weather-bg.component';
import { WeatherCityComponent } from './widgets/weather-city/weather-city.component';
import { CompassSvgComponent } from './widgets/compass-svg/compass-svg.component';
import { WeatherVectorComponent } from './widgets/weather-vector/weather-vector.component';
import { TempBarComponent } from './widgets/temp-bar/temp-bar.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        WeatherSpecsComponent,
        WeatherLocationComponent,
        AuthComponent,
        FooterComponent,
        ForecastDayComponent,
        Day10WeatherComponent,
        WeatherBgComponent,
        WeatherCityComponent,
        CompassSvgComponent,
        WeatherVectorComponent,
        TempBarComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
