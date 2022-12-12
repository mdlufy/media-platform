import { Profile, ProfileStoreService } from './../../profile-store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
    public profile$: Observable<Profile>

    constructor(private profileStore: ProfileStoreService) {
        this.profile$ = profileStore.profileData.state$;
    }

    ngOnInit(): void {}
}
