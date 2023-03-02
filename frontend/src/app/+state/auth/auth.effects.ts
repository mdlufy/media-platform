import { LocalStorageService } from './../../local-storage.service';
import { Router } from '@angular/router';
import { AuthLoadService } from './auth-load/auth-load.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { Store } from '@ngrx/store';
import { catchError, delay, map, of, switchMap, tap } from 'rxjs';
import { LoadingState } from 'src/app/loading-state';
import { AuthInfo } from './auth.reducer';
import { ACCESS_TOKEN } from 'src/app/jwt.interceptor';

@Injectable()
export class AuthEffects {
    authUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.authUser),
            tap(() => this.store$.dispatch(AuthActions.setAuthLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ authForm }) =>
                this.authLoadService.authUser$(authForm).pipe(
                    tap(() => this.store$.dispatch(AuthActions.setAuthLoadingState({ loadingState: LoadingState.SUCCESS }))),
                    map((authInfo: AuthInfo) => AuthActions.authUserSuccess({ authInfo })),
                    catchError(() => of(AuthActions.setAuthLoadingState({ loadingState: LoadingState.LOADING_ERROR }))),
                )
            )
        )
    )

    authSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.authUserSuccess),
            tap(({ authInfo }) => {
                this.localStorageService.setItem(ACCESS_TOKEN, authInfo.token);

                this.router.navigate(['pages'], { replaceUrl: true })
            })
        ),
        { dispatch: false }
    )

    authRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.authRedirect, AuthActions.logout),
            tap(() => this.store$.dispatch(AuthActions.setAuthLoadingState({ loadingState: LoadingState.LOADING }))),
            delay(200),
            tap(() => {
                this.localStorageService.removeItem(ACCESS_TOKEN);

                this.store$.dispatch(AuthActions.setAuthLoadingState({ loadingState: LoadingState.DEFAULT }));

                this.router.navigate(['/auth']);
            }),
        ),
        { dispatch: false }
    )

    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.createUser),
            tap(() => this.store$.dispatch(AuthActions.setAuthLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ registrationForm }) =>
                this.authLoadService.createUser$(registrationForm).pipe(
                    map(() => AuthActions.createUserSuccess()),
                    catchError(() => of(AuthActions.setAuthLoadingState({ loadingState: LoadingState.LOADING_ERROR })))
                )
            )
        )
    )

    createUserSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.createUserSuccess),
            tap(() => {
                this.store$.dispatch(AuthActions.setAuthLoadingState({ loadingState: LoadingState.DEFAULT }));

                this.router.navigate(['auth']);
            })
        ),
        { dispatch: false },
    )


    constructor(
        private actions$: Actions,
        private store$: Store,
        private router: Router,
        private authLoadService: AuthLoadService,
        private localStorageService: LocalStorageService,
    ) {}
}
