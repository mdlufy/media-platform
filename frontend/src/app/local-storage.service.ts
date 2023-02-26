import { Injectable } from '@angular/core';

export const TOKEN = 'token';

@Injectable()
export class LocalStorageService {
    constructor() {}

    public getToken(): string | null {
        return localStorage.getItem(TOKEN);
    }

    public setToken(token: string | null): void {
        if (!token) {
            return;
        }

        localStorage.setItem(TOKEN, token);
    }

    public removeToken(): void {
        localStorage.removeItem(TOKEN);
    }
}
