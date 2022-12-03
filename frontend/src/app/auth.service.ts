import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3002/api/v1';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private readonly http: HttpClient) {}

    public signup$(body: User) {
        return this.http.post(`${apiUrl}/user/signup`, body);
    }

    public signin$(body: { email: string; password: string }): Observable<{token: string}> {
        return this.http.post<{token: string}>(`${apiUrl}/user/signin`, body);
    }
}
