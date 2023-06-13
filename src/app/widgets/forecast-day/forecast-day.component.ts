import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.scss'],
})
export class ForecastDayComponent {
  @Input('day') day!: any;
}
