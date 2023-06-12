import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../models/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient, private cookieService: CookieService) {}

    httpOptions: any = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        observe: 'response',
    };

    isAuthenticated(): boolean {
        return this.cookieService.get('access_token') ? true : false;
    }

    login(loginForm: any): Observable<any> {
        return this.http
            .post<User>('http://localhost:3000/api/login', loginForm, this.httpOptions)
            .pipe(catchError(loginForm));
    }

    signup(signupForm: any): Observable<any> {
        return this.http
            .post<User>('http://localhost:3000/api/signup', signupForm, this.httpOptions)
            .pipe(catchError(signupForm));
    }
}
