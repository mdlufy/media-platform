import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDto } from 'src/app/interfaces/user.dto';
import { UserService } from './../../../api/user/user.service';
import { LocalStorageService } from './../../../local-storage.service';

@Injectable()
export class ProfileLoadService {
    constructor(
        private userService: UserService,
        private localStorageService: LocalStorageService
    ) {}

    public getProfile$(): Observable<UserDto | null> {
        const token = this.localStorageService.getToken();

        if (!token) {
            return of(null);
        }

        const { email } = JSON.parse(atob(token.split('.')[1])) as UserDto;

        return this.userService.fecthUser$(email);
    }
}
