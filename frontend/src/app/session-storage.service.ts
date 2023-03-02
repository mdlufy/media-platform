import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE } from '@ng-web-apis/common';

@Injectable({
    providedIn: 'root',
})
export class SessionStorageService {
    constructor(
        @Inject(SESSION_STORAGE) private readonly sessionStorage: Storage
    ) {}

    public getItem(key: string): string | null {
        return this.sessionStorage.getItem(key);
    }

    public setItem(key: string, value: string | null): void {
        if (!value) {
            return;
        }

        this.sessionStorage.setItem(key, value);
    }

    public removeItem(key: string): void {
        this.sessionStorage.removeItem(key);
    }
}
