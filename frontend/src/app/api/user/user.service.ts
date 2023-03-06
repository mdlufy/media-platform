import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { UserDto } from '../../interfaces/user.dto';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private readonly http: HttpClient) {}

    public fetchUser$(userEmail: string): Observable<UserDto> {
        return this.http.get<UserDto>(`${apiUrl}/user/${userEmail}`);
    }
}
