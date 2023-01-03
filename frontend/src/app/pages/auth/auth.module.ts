import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLabelModule,
        TuiInputModule,
        TuiInputPasswordModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        TuiAutoFocusModule,
    ],
    exports: [LoginComponent],
})
export class AuthModule {}
