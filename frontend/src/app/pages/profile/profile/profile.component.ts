import { ProfileStoreService } from 'src/app/profile-store.service';
import { Profile } from '../../../profile-store.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public profile$: Observable<Profile>;

    constructor(private profileStore: ProfileStoreService) {
        this.profile$ = profileStore.profileData.state$;
    }
}
