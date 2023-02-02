import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './api/auth/auth.service';
import { User } from './interfaces/user';

const TOKEN = 'token';

@Injectable({
    providedIn: 'root',
})
export class AuthStoreService {
    private _token: string | null = '';

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    public get isAuth(): boolean {
        return this.checkIsAuth();
    }

    public get token(): string | null {
        return this._token;
    }

    public set token(token: string | null) {
        this._token = token;

        token === null
            ? localStorage.removeItem(TOKEN)
            : localStorage.setItem(TOKEN, token);
    }

    public logout(): void {
        this.token = null;
    }

    private checkIsAuth() {
        const token = localStorage.getItem(TOKEN);

        this.token = token ?? null;

        return this.token ? true : false;
    }

    public signin(form: { email: string; password: string }): void {
        this.authService.signin$(form).subscribe((data) => {
            console.log(data);

            if (data.token) {
                const payload = JSON.parse(atob(data.token.split('.')[1]));

                console.log(payload);

                localStorage.setItem('token', data.token);

                this.router.navigate(['pages']);
            }
        });
    }

    public signup(form: User): void {
        this.authService.signup$(form).subscribe((data) => {
            console.log(data);

            this.router.navigate(['auth']);
        });
    }
}
