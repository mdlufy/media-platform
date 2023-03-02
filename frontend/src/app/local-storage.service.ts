import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    public getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    public setItem(key: string, value: string | null): void {
        if (!value) {
            return;
        }

        localStorage.setItem(key, value);
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
