import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfile } from 'src/app/+state/profile/profile.selectors';
import * as ProfileActions from '../../+state/profile/profile.actions';
import { Profile } from '../../+state/profile/profile.reducer';

@Injectable()
export class ProfileDataService {
    public get profile$(): Observable<Profile> {
        return this.store$.select(getProfile);
    }

    constructor(private readonly store$: Store) {}

    public loadProfile(): void {
        this.store$.dispatch(ProfileActions.loadProfileByUserEmail());
    }
}
