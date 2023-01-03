import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { UserService } from './api/user/user.service';
import { Store } from './store-creator';

export interface Profile {
    fullname: string;
    email: string;
}

const initialState = {
    fullname: '',
    email: '',
};

@Injectable({
    providedIn: 'root',
})
export class ProfileStoreService {
    public profileData: Store<Profile> = new Store<Profile>(initialState);

    constructor(private userService: UserService) {}

    public getUser() {
        const token = localStorage.getItem('token') ?? '';

        const payload = JSON.parse(atob(token.split('.')[1]));

        this.userService
            .fecthUser$(payload.email)
            .pipe(tap((data) => console.log(data)))
            .subscribe((data) => this.profileData.setState(data));
    }
}
