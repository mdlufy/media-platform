import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile, ProfileStoreService } from 'src/app/profile-store.service';

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
