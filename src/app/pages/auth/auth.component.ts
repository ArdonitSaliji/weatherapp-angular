import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Coords } from 'src/app/models/Coords';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private snackBar: MatSnackBar
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: { token: string; user: User }) => {
        this.loginForm.reset();
        this.cookieService.set('access_token', res.token);
        this.router.navigateByUrl('/home');
        this.snackBar.open('Login Successful!', 'Close', {
          duration: 3000,
          verticalPosition: 'top' as MatSnackBarVerticalPosition,
          panelClass: ['green-snackbar'],
        });
      },
      error: (err: any) => {
        this.snackBar.open('Invalid Credentials!', 'Close', {
          duration: 3000,
          verticalPosition: 'top' as MatSnackBarVerticalPosition,
          panelClass: ['red-snackbar'],
        });
        console.error(err);
      },
    });
  }

  checkLocationThenLogin() {
    let coords: Coords | undefined = JSON.parse(
      sessionStorage.getItem('coords') as any
    );
    if (!coords) {
      this.loginForm.reset();
      this.snackBar.open('You need to enable location first!', 'Close', {
        duration: 4000,
        verticalPosition: 'top' as MatSnackBarVerticalPosition,
        panelClass: ['red-snackbar'],
      });
      return;
    }

    this.login();
  }

  signup() {
    this.authService.signup(this.signupForm.value).subscribe({
      next: (res: User) => {
        this.signupForm.reset();
        this.snackBar.open('Signup Successful!', 'Close', {
          duration: 3000,
          verticalPosition: 'top' as MatSnackBarVerticalPosition,
          panelClass: ['green-snackbar'],
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
