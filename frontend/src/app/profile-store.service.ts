import { Injectable } from '@angular/core';
import { UserService } from './api/user/user.service';
import { Store } from './store-creator';

const initialState = {
    fullname: '',
    email: '',
};

export interface Profile {
    fullname: string;
    email: string;
}

@Injectable({
    providedIn: 'root',
})
export class ProfileStoreService {
    public profileData: Store<Profile> = new Store<Profile>(initialState);

    constructor(private userService: UserService) {}

    public fetchUser() {
        this.userService.fecthUser$();
    }
}
