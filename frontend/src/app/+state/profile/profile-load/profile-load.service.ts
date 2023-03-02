import { JwtToken } from './../../../interfaces/jwt';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtHelper } from 'src/app/helpers/jwt.helper';
import { UserDto } from 'src/app/interfaces/user.dto';
import { ACCESS_TOKEN } from 'src/app/jwt.interceptor';
import { UserService } from './../../../api/user/user.service';
import { SessionStorageService } from '../../../session-storage.service';
import { AccessTokenPayload } from 'src/app/interfaces/access-token';

@Injectable()
export class ProfileLoadService {
    constructor(
        private userService: UserService,
        private sessionStorageService: SessionStorageService
    ) {}

    public getProfile$(): Observable<UserDto | null> {
        const accessToken = this.sessionStorageService.getItem(ACCESS_TOKEN);

        if (!accessToken) {
            return of(null);
        }

        const result = JwtHelper.getFromAccessToken<AccessTokenPayload>(accessToken);

        console.log(result);

        return this.userService.fetchUser$('mdlufy@me.');
    }
}
