import { Injectable } from '@angular/core';
import { Store } from './api/store-creator';
import { UserService } from './api/user/user.service';

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
