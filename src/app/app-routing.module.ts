import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Day10WeatherComponent } from './day10-weather/day10-weather.component';
import { WeatherSpecsComponent } from './weather-specs/weather-specs.component';

const routes: Routes = [
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
