import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.loginForm.reset();
        this.cookieService.set('access_token', response.body.token);
        this.snackBar.open('Login Successful!', 'Close', {
          duration: 3000,
          verticalPosition: 'top' as MatSnackBarVerticalPosition,
          panelClass: ['green-snackbar'],
        });
        this.router.navigateByUrl('/home');
      },
      (error) => {
        this.snackBar.open('Invalid Credentials!', 'Close', {
          duration: 3000,
          verticalPosition: 'top' as MatSnackBarVerticalPosition,
          panelClass: ['red-snackbar'],
        });
        console.error(error);
      }
    );
  }
  signup() {
    this.authService.signup(this.signupForm.value).subscribe(
      (response) => {
        console.log(response);
        this.signupForm.reset();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
