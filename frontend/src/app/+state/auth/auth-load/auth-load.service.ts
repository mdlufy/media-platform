import { AuthService } from './../../../api/auth/auth.service';
import { Injectable } from '@angular/core';
import { AuthForm } from 'src/app/interfaces/auth-form';
import { map, Observable, tap } from 'rxjs';
import { AuthInfo } from '../auth.reducer';
import { AuthDto } from 'src/app/interfaces/auth.dto';
import { mapAuthDtoToAuthInfo } from 'src/app/helpers/auth-mapping.helper';
import { Router } from '@angular/router';
import { RegistrationForm } from 'src/app/interfaces/registration-form';
import { UserDto } from 'src/app/interfaces/user.dto';

@Injectable()
export class AuthLoadService {
    constructor(private authService: AuthService, private router: Router) {}

    public authUser$(authForm: AuthForm): Observable<AuthInfo> {
        return this.authService
            .signin$(authForm)
            .pipe(
                map((authDto: AuthDto) => mapAuthDtoToAuthInfo(authDto)),
            );
    }

    public createUser$(registrationForm: RegistrationForm): Observable<UserDto> {
        return this.authService
            .signup$(registrationForm)
    }
}
