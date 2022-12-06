import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN = 'token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _token: string | null = '';

    constructor() {}

    public get isAuth(): boolean {
        return this.checkIsAuth();
    }

    public get token(): string | null {
        return this._token;
    }

    public set token(token: string | null) {
        this._token = token;

        token === null ? localStorage.removeItem(TOKEN) : localStorage.setItem(TOKEN, token);
    }

    public logout(): void {
        this.token = null;
    }

    private checkIsAuth() {
        const token = localStorage.getItem(TOKEN);

        this.token = token ?? null;

        return this.token ? true : false;
    }
}
