import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiLoaderModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { AuthLoadService } from 'src/app/+state/auth/auth-load/auth-load.service';
import { AuthEffects } from 'src/app/+state/auth/auth.effects';
import { AuthInfo, authReducer } from 'src/app/+state/auth/auth.reducer';
import { ACCESS_TOKEN } from 'src/app/jwt.interceptor';
import { SessionStorageService } from 'src/app/session-storage.service';
import * as AuthActions from '../../+state/auth/auth.actions';
import { FEATURE_AUTH } from './../../+state/auth/auth.selectors';
import { AuthDataService } from './auth-data.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const EFFECTS_LIST = [AuthEffects];

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLabelModule,
        TuiInputModule,
        TuiInputPasswordModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        TuiAutoFocusModule,
        TuiLoaderModule,
        EffectsModule.forFeature(EFFECTS_LIST),
        StoreModule.forFeature(FEATURE_AUTH, authReducer),
    ],
    providers: [AuthDataService, AuthLoadService],
    exports: [LoginComponent, RegistrationComponent],
})
export class AuthModule {
    constructor(
        private store$: Store,
        private sessionStorageService: SessionStorageService
    ) {
        const accessToken = this.sessionStorageService.getItem(ACCESS_TOKEN);

        if (accessToken) {
            const authInfo: AuthInfo = {
                isAuth: true,
                token: accessToken,
            };

            this.store$.dispatch(AuthActions.authUserSuccess({ authInfo }));
        }
    }
}
