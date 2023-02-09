import { createAction, props } from '@ngrx/store';
import { UserDto } from 'src/app/interfaces/user.dto';
import { LoadingState } from 'src/app/loading-state';

export const setProfileLoadingState = createAction(
    '[Profile Page] Set Profile Loading State',
    props<{ loadingState: LoadingState }>()
);

export const loadProfileByUserEmail = createAction(
    '[Profile Page] Load Profile By User Email',
);

export const loadProfileSuccess = createAction(
    '[Profile Page] Load Profile Sucess',
    props<{ profile: UserDto }>()
);
