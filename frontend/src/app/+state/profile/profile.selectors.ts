import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Profile } from './profile.reducer';

export const FEATURE_PROFILE = 'profile';

export const getProfileState = createFeatureSelector<Profile>(FEATURE_PROFILE);

export const getProfile = createSelector(
    getProfileState,
    (profileState: Profile) => profileState
);
