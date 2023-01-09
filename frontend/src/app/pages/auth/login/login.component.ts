import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStoreService } from './../../../auth-store.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loading = true;

    public loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authStore: AuthStoreService, private router: Router) {}

    ngOnInit(): void {
        this.showLoader();
        this.checkIsAuth();
    }

    public onSubmit() {
        const form = {
            email: this.loginForm.value.email ?? '',
            password: this.loginForm.value.password ?? '',
        };

        this.authStore.signin(form);
    }

    private checkIsAuth() {
        const isAuth = this.authStore.isAuth;

        if (isAuth) {
            this.router.navigate(['pages'], { replaceUrl: true });

            return;
        }

        this.hideLoader();
    }

    private showLoader(): void {
        this.loading = true;
    }

    private hideLoader(): void {
        this.loading = false;
    }
}
