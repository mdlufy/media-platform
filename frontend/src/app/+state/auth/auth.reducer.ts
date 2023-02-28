import { createReducer, on } from '@ngrx/store';
import { LoadingState } from 'src/app/loading-state';
import * as AuthActions from './auth.actions';

export interface AuthInfo {
    isAuth: boolean;
    token: string | null;
}

export interface AuthState {
    loadingState: LoadingState;
    authInfo: AuthInfo;
}

export const authInitialState: AuthState = {
    loadingState: LoadingState.DEFAULT,
    authInfo: {
        isAuth: false,
        token: null,
    },
};

export const authReducer = createReducer(
    authInitialState,
    on(AuthActions.setAuthLoadingState, (state, { loadingState }) => ({
        ...state,
        loadingState,
    })),
    on(AuthActions.authUserSuccess, (state, { authInfo }) => ({
        ...state,
        authInfo,
    })),
    on(AuthActions.logout, (state) => ({
        ...state,
        authInfo: {
            isAuth: false,
            token: null,
        },
    })),
);
