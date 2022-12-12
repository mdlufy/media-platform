import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        FormsModule,
    ],
    exports: [LoginComponent],
})
export class AuthModule {}
