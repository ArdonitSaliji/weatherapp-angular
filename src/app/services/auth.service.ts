import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { User } from '../models/User';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
//
export class AuthService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response',
  };
  userToken = this.cookieService.get('access_token');

  httpOptionsWithToken: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.userToken}`,
    }),
    observe: 'response',
  };

  isAuthenticated(): boolean {
    return this.cookieService.get('access_token') ? true : false;
  }

  login(loginForm: any): Observable<any> {
    return new Observable<{ token: string; user: User } | null>((observer) => {
      this.http
        .post<User>(
          'http://localhost:3000/api/login',
          loginForm,
          this.httpOptions
        )
        .pipe(
          map((res: any) => {
            delete res.body.user.password;
            return res.body;
          }),
          catchError(loginForm)
        )
        .subscribe({
          next: (res: { token: string; user: User }) => {
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

  signup(signupForm: any): Observable<any> {
    return new Observable<User>((observer) => {
      this.http
        .post<User>(
          'http://localhost:3000/api/signup',
          signupForm,
          this.httpOptions
        )
        .pipe(
          map((res: any) => {
            res.body;
            return res.body;
          }),
          catchError(signupForm)
        )
        .subscribe({
          next(res: User) {
            observer.next(res);
          },
          error(err) {
            console.log(err);
          },
          complete() {
            console.log('Complete');
          },
        });
    });
  }

  logout() {
    this.cookieService.delete('access_token');
    sessionStorage.removeItem('citySelected');
    this.router.navigateByUrl('/');
  }
}
