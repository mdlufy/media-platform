import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3002/api/v1';

const TOKEN = 'token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _token: string | null = '';

    constructor(private readonly http: HttpClient) {}

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

    

    public signup$(body: User) {
        return this.http.post(`${apiUrl}/user/signup`, body);
    }

    public signin$(body: {
        email: string;
        password: string;
    }): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${apiUrl}/user/signin`, body);
    }
}
