import { LoadingState } from 'src/app/loading-state';
import { createAction, props } from '@ngrx/store';
import { AuthForm } from 'src/app/interfaces/auth-form';
import { RegistrationForm } from 'src/app/interfaces/registration-form';
import { User } from 'src/app/interfaces/user';
import { AuthInfo } from './auth.reducer';

export const getAuthLoadingState = createAction(
    '[Auth Page] Get Auth Loading State'
);

export const setAuthLoadingState = createAction(
    '[Auth Page] Set Auth Loading State',
    props<{ loadingState: LoadingState }>()
);

export const authUser = createAction(
    '[Auth Page] Auth User',
    props<{ authForm: AuthForm }>()
);

export const authUserSuccess = createAction(
    '[Auth Page] Auth User Success',
    props<{ authInfo: AuthInfo }>()
);

export const createUser = createAction(
    '[Auth Page] Create User',
    props<{ registrationForm: RegistrationForm }>()
);

export const createUserSuccess = createAction(
    '[Auth Page] Create User Success',
);

export const authRedirect = createAction(
    '[Auth Page] Redirect to Auth Page'
);

export const logout = createAction(
    '[Auth Page] Logout',
);
