import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Day10WeatherComponent } from './pages/day10-weather/day10-weather.component';
import { WeatherSpecsComponent } from './pages/weather-specs/weather-specs.component';
import { AuthComponent } from './pages/auth/auth.component';
import { WeatherLocationComponent } from './pages/weather-location/weather-location.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'weather',
    component: Day10WeatherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'weather/specs',
    component: WeatherSpecsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'location',
    component: WeatherLocationComponent,
    canActivate: [AuthGuard],
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CookieService, AuthService],
})
export class AppRoutingModule {}
