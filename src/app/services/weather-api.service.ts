import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  // getUserWeather(lat: string, lon: string): Observable<any> {
  //   return this.http.get<any>(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${environment.WEATHER_API_KEY}`
  //   );
  // }
  //
}
