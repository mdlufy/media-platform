import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, switchMap, tap } from 'rxjs';
import { UserDto } from 'src/app/interfaces/user.dto';
import { LoadingState } from 'src/app/loading-state';
import { ProfileLoadService } from './profile-load/profile-load.service';
import * as ProfileActions from './profile.actions';

@Injectable()
export class ProfileEffects {
    loadProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProfileActions.loadProfileByUserEmail),
            tap(() => this.store$.dispatch(ProfileActions.setProfileLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(() => 
                this.profileLoadService.getProfileInfo$().pipe(
                    tap((profile: UserDto) =>
                        this.store$.dispatch(ProfileActions.setProfileLoadingState({
                            loadingState: profile && !!Object.keys(profile).length ? LoadingState.SUCCESS : LoadingState.LOADING_ERROR
                        })),
                    ),
                    map((profile: UserDto) =>
                        ProfileActions.loadProfileSuccess({ profile })
                    ),
                    catchError(() => EMPTY),
                )
            ),
        )
    );

    constructor(
        private actions$: Actions,
        private store$: Store,
        private profileLoadService: ProfileLoadService
    ) {}
}
