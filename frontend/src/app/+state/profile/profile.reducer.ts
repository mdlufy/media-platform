import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export interface ProfileState {
    fullname: string | null;
    email: string | null;
    password: string | null;
}

// export const profileAdapter = createEntityAdapter<any>({});

export const profileInitialState: ProfileState = {
    fullname: null,
    email: null,
    password: null,
}

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
        (state: ProfileState, { profile } ) => ({
            ...state,
            ...profile,
        })
    )
);

export function reducer(state: ProfileState | undefined, action: Action): ProfileState {
    return profileReducer(state, action);
}
