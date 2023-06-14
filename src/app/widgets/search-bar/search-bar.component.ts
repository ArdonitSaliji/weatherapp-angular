import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { GetLocationService } from 'src/app/services/get-location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchText!: any;
  constructor(
    private geoLocation: GetLocationService,
    private weather: WeatherApiService
  ) {}
  @Output() sendInput: any = new EventEmitter<any>();

  onEnter() {
    this.sendInput.emit(this.searchText);
  }
}
