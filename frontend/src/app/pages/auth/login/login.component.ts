import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { LoadingState } from 'src/app/loading-state';
import { AuthDataService } from './../auth-data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public isUserAuth$: Observable<boolean>;

    public loadingState$: Observable<LoadingState>;

    public loadingState = LoadingState;

    public loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private authDataService: AuthDataService) {
        this.isUserAuth$ = this.authDataService.isUserAuth$;
        this.loadingState$ = this.authDataService.loadingState$;
    }

    public onSubmit() {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        if (email && password) {
            this.authDataService.authUser({ email, password });
        }
    }
}
