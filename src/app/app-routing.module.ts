import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Day10WeatherComponent } from './pages/day10-weather/day10-weather.component';
import { WeatherSpecsComponent } from './pages/weather-specs/weather-specs.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'weather',
        component: Day10WeatherComponent,
    },
    { path: 'weather/specs', component: WeatherSpecsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
