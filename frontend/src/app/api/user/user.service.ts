import { User } from '../../interfaces/user.interface';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/app/config';
import { UserDto } from './user.dto';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private readonly http: HttpClient) {}

    public fecthUser$(userEmail: string): Observable<UserDto> {
        return this.http
            .get<UserDto>(`${apiUrl}/user/${userEmail}`)
            .pipe(catchError(() => EMPTY));
    }
}
