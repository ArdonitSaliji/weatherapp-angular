import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetLocationService } from './get-location.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

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

  city!: any;

  formatData(data: any) {
    data.list.map((day: any) => {
      day.main.temp = Math.round(day.main.temp);
      day.main.temp_min = Math.round(day.main.temp_min);
      day.main.temp_max = Math.round(day.main.temp_max) + 1;
    });
    let desc = data.list[0].weather[0].description;
    data.list[0].weather[0].description =
      desc.charAt(0).toUpperCase() + desc.slice(1);
    data.city.sunrise = this.datePipe.transform(
      new Date(data.city.sunrise * 1000),
      'h:mm'
    );
    data.city.sunset = this.datePipe.transform(
      new Date(data.city.sunset * 1000),
      'h:mm'
    );
    data.list[0].main.feels_like = Math.round(data.list[0].main.feels_like);
  }

  coords: any = JSON.parse(sessionStorage.getItem('coords') || '');

  getUserWeather(): Observable<any> {
    return new Observable<any>((observer) => {
      this.http
        .get<any>(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${this.coords.lat}&lon=${this.coords.lon}&appid=${environment.WEATHER_API_KEY}&units=metric`
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

  getCityWeather(data: any): Observable<any> {
    return new Observable<any>((observer) => {
      this.http
        .get<any>(
          `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${environment.WEATHER_API_KEY}`
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

  getCityWeatherData(lat: any, lon: any) {
    return new Observable<any>((observer) => {
      this.http
        .get<any>(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${environment.WEATHER_API_KEY}&units=metric`
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

  httpOptionsWithToken(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getUserToken()}`,
      }),
      observe: 'response',
    };
  }

  saveCity(cityName: any) {
    return new Observable<any>((observer) => {
      this.getCityWeather(cityName).subscribe((res: any) => {
        return new Observable<any>((observer) => {
          this.http
            .post<any>(
              `http://localhost:3000/api/user/city/save`,
              { cityName: res[0]?.name },
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
        }).subscribe({
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
    });
  }

  getUserCities() {
    return new Observable<any>((observer) => {
      this.http
        .get<any>(
          `http://localhost:3000/api/user/city/get`,
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

  deleteCity(cityName: any) {
    return new Observable<any>((observer) => {
      this.http
        .post<any>(
          `http://localhost:3000/api/user/city/delete`,
          { cityName: cityName },
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
