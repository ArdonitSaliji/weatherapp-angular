import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [CookieService, AuthService],
})
export class AuthModule {}
