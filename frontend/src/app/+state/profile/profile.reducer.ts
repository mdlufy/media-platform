import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export interface Profile {
    fullname: string | null;
    email: string | null;
    password: string | null;
}

export const profileInitialState: Profile = {
    fullname: null,
    email: null,
    password: null,
};

export const profileReducer = createReducer(
    profileInitialState,
    on(
        ProfileActions.setProfileLoadingState,
        (state: Profile, { loadingState }) => ({
            ...state,
            loadingState,
        })
    ),
    on(
        ProfileActions.loadProfileSuccess,
        (state: Profile, { profile }) => ({
            ...state,
            ...profile,
        })
    )
);
