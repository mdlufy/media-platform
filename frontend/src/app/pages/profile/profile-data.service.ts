import { LoadingState } from 'src/app/loading-state';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfile, getProfileLoadingState } from 'src/app/+state/profile/profile.selectors';
import * as ProfileActions from '../../+state/profile/profile.actions';
import { Profile } from '../../+state/profile/profile.reducer';

@Injectable()
export class ProfileDataService {
    public get profile$(): Observable<Profile> {
        return this.store$.select(getProfile);
    }

    public get loadingState$(): Observable<LoadingState> {
        return this.store$.select(getProfileLoadingState)
    }

    constructor(private readonly store$: Store) {}

    public loadProfile(): void {
        this.store$.dispatch(ProfileActions.loadProfileByUserEmail());
    }
}
