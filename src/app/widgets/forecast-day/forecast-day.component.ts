import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.scss'],
})
export class ForecastDayComponent {
  @Input('day') day!: any;

  getIcon(condition: any) {
    switch (condition) {
      case 'light rain':
        return 'fa-solid fa-cloud-rain';
      case 'heavy intensity rain':
        return 'fa-solid fa-cloud-showers-heavy';
      case 'clear sky':
        return 'fa-solid fa-sun';
      case 'broken clouds':
        return 'fa-solid fa-cloud-sun';
      case 'overcast clouds':
        return 'fa-brands fa-cloudflare';
      case 'scattered clouds':
        return 'fa-brands fa-soundcloud';
      case 'few clouds':
        return 'fa-solid fa-cloud-sun-rain';
      case 'moderate rain':
        return 'fa-solid fa-cloud-rain';
      default:
        return '';
    }
  }
}
