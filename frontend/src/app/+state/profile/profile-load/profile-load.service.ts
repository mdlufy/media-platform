import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { Observable, of } from 'rxjs';
import { JwtHelper } from 'src/app/helpers/jwt.helper';
import { AccessTokenPayload } from 'src/app/interfaces/access-token';
import { UserDto } from 'src/app/interfaces/user.dto';
import { ACCESS_TOKEN } from 'src/app/jwt.interceptor';
import { UserService } from './../../../api/user/user.service';

@Injectable()
export class ProfileLoadService {
    constructor(
        @Inject(LOCAL_STORAGE) private readonly localStorageService: Storage,
        private userService: UserService,
    ) {}

    public getProfile$(): Observable<UserDto | null> {
        const accessToken = this.localStorageService.getItem(ACCESS_TOKEN);

        if (!accessToken) {
            return of(null);
        }

        const { email } = JwtHelper.getFromAccessToken<AccessTokenPayload>(accessToken);

        return this.userService.fetchUser$(email);
    }
}
