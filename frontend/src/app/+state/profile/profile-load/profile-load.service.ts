import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from 'src/app/interfaces/user.dto';
import { UserService } from './../../../api/user/user.service';

@Injectable()
export class ProfileLoadService {
    constructor(private userService: UserService) {}

    public getProfileInfo$(): Observable<UserDto> {
        const token = localStorage.getItem('token') ?? '';

        const payload = JSON.parse(atob(token.split('.')[1]));

        return this.userService.fecthUser$(payload.email);
    }
}
