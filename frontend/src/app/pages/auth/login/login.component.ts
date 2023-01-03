import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStoreService } from './../../../auth-store.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authStore: AuthStoreService, private router: Router) {}

    public onSubmit() {
        const form = {
            email: this.loginForm.value.email ?? '',
            password: this.loginForm.value.password ?? '',
        };

        this.authStore.signin(form);
    }
}
