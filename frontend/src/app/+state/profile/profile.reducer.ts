import { LoadingState } from 'src/app/loading-state';
import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export interface Profile {
    fullname: string | null;
    email: string | null;
    password: string | null;
}

export interface ProfileState {
    loadingState: LoadingState,
    profile: Profile,
}

export const profileInitialState: ProfileState = {
    loadingState: LoadingState.LOADING,
    profile: {
        fullname: null,
        email: null,
        password: null,
    }
};

export const profileReducer = createReducer(
    profileInitialState,
    on(
        ProfileActions.setProfileLoadingState,
        (state: ProfileState, { loadingState }) => ({
            ...state,
            loadingState,
        })
    ),
    on(
        ProfileActions.loadProfileSuccess,
        (state: ProfileState, { profile }) => ({
            ...state,
            profile: {
                ...state.profile,
                ...profile,
            },
        })
    )
);
