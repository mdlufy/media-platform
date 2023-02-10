import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Profile, ProfileState } from './profile.reducer';

export const FEATURE_PROFILE = 'profile';

export const getProfileState = createFeatureSelector<ProfileState>(FEATURE_PROFILE);

export const getProfile = createSelector(
    getProfileState,
    (profileState: ProfileState) => profileState.profile
);

export const getProfileLoadingState = createSelector(
    getProfileState,
    (profileState: ProfileState) => profileState.loadingState
);
