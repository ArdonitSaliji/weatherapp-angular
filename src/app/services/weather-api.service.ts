import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Coords } from '../models/Coords';
import { City } from '../models/City';
import { CityData } from '../models/CityData';
import { Forecast } from '../models/Forecast';
@Injectable({
  providedIn: 'root',
})
//
export class WeatherApiService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    private cookieService: CookieService
  ) {}

  formatData(data: Forecast) {
    data.list.map((day: any) => {
      day.main.temp = Math.round(day.main.temp);
      day.main.temp_min = Math.round(day.main.temp_min);
      day.main.temp_max = Math.round(day.main.temp_max) + 1;
    });

    let desc = data.list[0].weather[0].description;

    data.list[0].weather[0].description =
      desc.charAt(0).toUpperCase() + desc.slice(1);

    data.city.sunrise = this.datePipe.transform(
      new Date(Number(data.city.sunrise) * 1000),
      'h:mm'
    );
    data.city.sunset = this.datePipe.transform(
      new Date(Number(data.city.sunset) * 1000),
      'h:mm'
    );
    data.list[0].main.feels_like = Math.round(data.list[0].main.feels_like);
  }

  coords: Coords = JSON.parse(sessionStorage.getItem('coords') as any);

  getUserWeather(): Observable<Forecast> {
    return new Observable<Forecast>((observer) => {
      this.http
        .get<Forecast>(
          `https://api.openweathermap.org/data/2.5/forecast?cnt=11&lat=${this.coords.lat}&lon=${this.coords.lon}&appid=${environment.WEATHER_API_KEY}&units=metric`
        )
        .subscribe({
          next: (res: Forecast) => {
            this.formatData(res);
            observer.next(res);
          },
          error: (error: any) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          },
        });
    });
  }

  getCityWeather(data: string): Observable<CityData[]> {
    return new Observable<CityData[]>((observer) => {
      this.http
        .get<CityData[]>(
          `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=${environment.WEATHER_API_KEY}`
        )
        .subscribe({
          next: (res: CityData[]) => {
            observer.next(res);
          },
          error: (error: any) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          },
        });
    });
  }

  getCityWeatherData(lat: number, lon: number) {
    return new Observable<Forecast>((observer) => {
      this.http
        .get<any>(
          `https://api.openweathermap.org/data/2.5/forecast?cnt=11&lat=${lat}&lon=${lon}&appid=${environment.WEATHER_API_KEY}&units=metric`
        )
        .subscribe({
          next: (res: any) => {
            this.formatData(res);
            observer.next(res);
          },
          error: (error: any) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          },
        });
    });
  }

  getUserToken() {
    return this.cookieService.get('access_token') || null;
  }

  httpOptionsWithToken(): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getUserToken()}`,
      }),
      observe: 'response',
    };
  }

  saveCity(cityCoords: Coords) {
    return new Observable<{ msg: string } | null>((observer) => {
      this.http
        .post<any>(
          `http://localhost:3000/api/user/city/save`,
          { cityCoords: cityCoords },
          this.httpOptionsWithToken()
        )
        .subscribe({
          next: (res: any) => {
            observer.next(res);
          },
          error: (error: any) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          },
        });
    });
  }

  getUserCities() {
    return new Observable<City[] | null>((observer) => {
      this.http
        .get<any>(
          `http://localhost:3000/api/user/city/get`,
          this.httpOptionsWithToken()
        )
        .pipe(
          map((res: any) => {
            return res.body;
          })
        )
        .subscribe({
          next: (res: City[]) => {
            observer.next(res);
          },
          error: (error: any) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          },
        });
    });
  }

  deleteCity(cityCoords: Coords) {
    return new Observable<{ msg: string } | null>((observer) => {
      this.http
        .post<any>(
          `http://localhost:3000/api/user/city/delete`,
          { cityCoords: cityCoords },
          this.httpOptionsWithToken()
        )
        .subscribe({
          next: (res: any) => {
            observer.next(res);
          },
          error: (error: any) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          },
        });
    });
  }
}
