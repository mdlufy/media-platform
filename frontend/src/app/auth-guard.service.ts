import { Observable, of, Subscription, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthDataService } from './pages/auth/auth-data.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authDataService: AuthDataService,
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // return this.authDataService.isUserAuth$.pipe(
        //     tap((isAuth: boolean) => {
        //         if (!isAuth) {
        //             this.router.navigate(['auth']); 
        //         }
        //     }), 
        //     take(1),
        // );

        const isAuth = this.authDataService.isAuth();

        if (!isAuth) {
            this.router.navigate(['auth']);
            
            return of(false);
        }

        return of(true);
    }
}
