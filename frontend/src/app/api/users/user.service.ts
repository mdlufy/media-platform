import { User } from './../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/app/config';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private readonly http: HttpClient) {}

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
