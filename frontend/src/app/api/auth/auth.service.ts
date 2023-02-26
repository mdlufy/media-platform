import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthForm } from 'src/app/interfaces/auth-form';
import { RegistrationForm } from 'src/app/interfaces/registration-form';
import { UserDto } from 'src/app/interfaces/user.dto';
import { AuthDto } from 'src/app/interfaces/auth.dto';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private readonly http: HttpClient) {}

    public signup$(registrationForm: RegistrationForm): Observable<UserDto> {
        return this.http.post<UserDto>(`${apiUrl}/auth/signup`, registrationForm);
    }

    public signin$(authForm: AuthForm): Observable<AuthDto> {
        return this.http.post<AuthDto>(`${apiUrl}/auth/signin`, authForm);
    }
}
