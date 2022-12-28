import { User } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/app/config';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private readonly http: HttpClient) {}

    public fecthUser$(userEmail: string): Observable<User> {
        return this.http.get<User>(`${apiUrl}/user/${userEmail}`);
    }
}
