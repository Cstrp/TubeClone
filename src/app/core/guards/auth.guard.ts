import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isRegistered.pipe(
      map((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/']).catch((err) => console.error(err));
        }

        return isAuth;
      }),
    );
  }
}
