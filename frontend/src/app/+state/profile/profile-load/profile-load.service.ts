import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDto } from 'src/app/interfaces/user.dto';
import { ACCESS_TOKEN } from 'src/app/jwt.interceptor';
import { UserService } from './../../../api/user/user.service';
import { LocalStorageService } from './../../../local-storage.service';

@Injectable()
export class ProfileLoadService {
    constructor(
        private userService: UserService,
        private localStorageService: LocalStorageService
    ) {}

    public getProfile$(): Observable<UserDto | null> {
        const accessToken = this.localStorageService.getItem(ACCESS_TOKEN);

        if (!accessToken) {
            return of(null);
        }

        const { email } = JSON.parse(atob(accessToken.split('.')[1])) as UserDto;

        return this.userService.fecthUser$(email);
    }
}
