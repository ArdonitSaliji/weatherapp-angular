import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetLocationService } from './get-location.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
//
export class WeatherApiService {
  constructor(
    private http: HttpClient,
    private geoLocation: GetLocationService,
    private datePipe: DatePipe
  ) {}

  formatData(data: any) {
    data.list.map((day: any) => {
      day.main.temp = Math.round(day.main.temp);
      day.main.temp_min = Math.round(day.main.temp_min);
      day.main.temp_max = Math.round(day.main.temp_max);
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

  getUserWeather(): Observable<any> {
    return new Observable<any>((observer) => {
      this.geoLocation.getCords().then((res: any) => {
        this.http
          .get<any>(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${res.latitude}&lon=${res.longitude}&appid=${environment.WEATHER_API_KEY}&units=metric`
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
    });
  }

  // getCityWeather(): Observable<any> {
  //   return new Observable<any>((observer) => {
  //     this.geoLocation.getCords().then((res: any) => {
  //       this.http
  //         .get<any>(
  //           `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${cityname}&appid=${environment.WEATHER_API_KEY}&units=metric`
  //         )
  //         .subscribe({
  //           next: (res: any) => {
  //             this.formatData(res);
  //             observer.next(res);
  //           },
  //           error: (error: any) => {
  //             observer.error(error);
  //           },
  //           complete: () => {
  //             observer.complete();
  //           },
  //         });
  //     });
  //   });
  // }
}
