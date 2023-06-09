import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherSpecsComponent } from './weather-specs/weather-specs.component';
import { WeatherLocationComponent } from './weather-location/weather-location.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { ForecastDayComponent } from './forecast-day/forecast-day.component';
import { Day10WeatherComponent } from './day10-weather/day10-weather.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
