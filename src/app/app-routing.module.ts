import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Day10WeatherComponent } from './day10-weather/day10-weather.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'weather',
    component: Day10WeatherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
