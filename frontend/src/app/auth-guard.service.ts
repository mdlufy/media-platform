import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthDataService } from './pages/auth/auth-data.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authDataService: AuthDataService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.checkIsUserAuthenticated();
    }

    private checkIsUserAuthenticated(): Observable<boolean> {
        return this.authDataService.isUserAuthenticated$.pipe(
            tap((isAuth: boolean) => {
                if (!isAuth) {
                    this.router.navigate(['auth']);
                }
            }),
            take(1)
        );
    }
}
