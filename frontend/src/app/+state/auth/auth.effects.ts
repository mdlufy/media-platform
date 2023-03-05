import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, delay, map, of, switchMap, tap } from 'rxjs';
import { ACCESS_TOKEN } from 'src/app/jwt.interceptor';
import { LoadingState } from 'src/app/loading-state';
import { AuthLoadService } from './auth-load/auth-load.service';
import * as AuthActions from './auth.actions';
import { AuthInfo } from './auth.reducer';

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
                if (authInfo.accessToken) {
                    this.localStorageService.setItem(ACCESS_TOKEN, authInfo.accessToken);

                    this.router.navigate(['pages'], { replaceUrl: true })
                }
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

                this.router.navigate(['auth']);
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
        @Inject(LOCAL_STORAGE) private readonly localStorageService: Storage,
        private actions$: Actions,
        private store$: Store,
        private router: Router,
        private authLoadService: AuthLoadService,
    ) {}
}
