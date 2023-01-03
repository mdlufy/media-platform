import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile, ProfileStoreService } from 'src/app/profile-store.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    public profile$: Observable<Profile>;

    constructor(private profileStore: ProfileStoreService) {
        this.profile$ = profileStore.profileData.state$;
    }

    ngOnInit(): void {
        this.profileStore.getUser();
    }
}
