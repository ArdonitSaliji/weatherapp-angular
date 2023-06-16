import { Component, EventEmitter, Output } from '@angular/core';
import { GetLocationService } from 'src/app/services/get-location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchText!: any;
  @Output() sendInput: any = new EventEmitter<any>();

  onEnter(event: any) {
    this.sendInput.emit(this.searchText);
    event.target.value = '';
  }
}
