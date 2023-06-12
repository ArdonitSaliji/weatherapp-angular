import { Inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = Inject(AuthService);
  const router = Inject(Router);
  return auth.isAuthenticated().pipe(
    map(() => true),
    catchError(() => {
      router.navigate(['route-to-fallback-page']);
      return of(false);
    })
  );
};
