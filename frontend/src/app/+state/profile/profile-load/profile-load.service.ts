import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { UserDto } from 'src/app/api/user/user.dto';
import { UserService } from './../../../api/user/user.service';

@Injectable()
export class ProfileLoadService {
    constructor(private userService: UserService) {}

    public getProfileInfo$(): Observable<UserDto> {
        const token = localStorage.getItem('token') ?? '';

        const payload = JSON.parse(atob(token.split('.')[1]));

        return this.userService
            .fecthUser$(payload.email)
            .pipe(catchError(() => EMPTY));
    }
}
