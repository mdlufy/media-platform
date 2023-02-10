import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { mapAuthDtoToAuthInfo } from 'src/app/helpers/auth-mapping.helper';
import { AuthForm } from 'src/app/interfaces/auth-form';
import { AuthDto } from 'src/app/interfaces/auth.dto';
import { RegistrationForm } from 'src/app/interfaces/registration-form';
import { UserDto } from 'src/app/interfaces/user.dto';
import { AuthInfo } from '../auth.reducer';
import { AuthService } from './../../../api/auth/auth.service';

@Injectable()
export class AuthLoadService {
    constructor(private authService: AuthService) {}

    public authUser$(authForm: AuthForm): Observable<AuthInfo> {
        return this.authService
            .signin$(authForm)
            .pipe(map((authDto: AuthDto) => mapAuthDtoToAuthInfo(authDto)));
    }

    public createUser$(registrationForm: RegistrationForm): Observable<UserDto> {
        return this.authService.signup$(registrationForm)
    }
}
