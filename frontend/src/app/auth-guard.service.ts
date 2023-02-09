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

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return this.authDataService.isUserAuth$.pipe(
        //     map((isAuth: boolean) => {
        //         if (!isAuth) {
        //             this.router.navigate(['auth']);

        //             return false;
        //         }

        //         return true;
        //     })
        // );

        const isAuth = this.authDataService.isAuth();

        if (!isAuth) {
            this.router.navigate(['auth']);
            
            return false;
        }

        return true;
    }
}
