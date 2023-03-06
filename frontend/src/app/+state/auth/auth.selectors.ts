import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const FEATURE_AUTH = 'auth';

export const getAuthState = createFeatureSelector<AuthState>(FEATURE_AUTH);

export const getAuthLoadingState = createSelector(
    getAuthState,
    (state: AuthState) => state.loadingState
);

export const isUserAuth = createSelector(
    getAuthState,
    (state: AuthState) => state.authInfo.isAuth
);

export const getAccessToken = createSelector(
    getAuthState,
    (state: AuthState) => state.authInfo.accessToken
);
