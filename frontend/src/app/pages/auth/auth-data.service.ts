import { RegistrationForm } from './../../interfaces/registration-form';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthForm } from 'src/app/interfaces/auth-form';
import { LoadingState } from 'src/app/loading-state';
import * as AuthActions from '../../+state/auth/auth.actions';
import {
    getAuthLoadingState,
    isUserAuth,
} from './../../+state/auth/auth.selectors';

@Injectable()
export class AuthDataService {
    public get loadingState$(): Observable<LoadingState> {
        return this.store$.select(getAuthLoadingState);
    }

    public get isUserAuthenticated$(): Observable<boolean> {
        return this.store$.select(isUserAuth);
    }

    constructor(private store$: Store) {}

    public authUser(authForm: AuthForm): void {
        this.store$.dispatch(AuthActions.authUser({ authForm }));
    }

    public createUser(registrationForm: RegistrationForm): void {
        this.store$.dispatch(AuthActions.createUser({ registrationForm }));
    }

    public logout(): void {
        this.store$.dispatch(AuthActions.logout());
    }
}
