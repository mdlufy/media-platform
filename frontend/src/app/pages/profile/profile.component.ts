import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileState } from './../../+state/profile/profile.reducer';
import { ProfileService } from './profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    public profile$: Observable<ProfileState>;

    public readonly breadcrumbItems = [
        {
            caption: `Главная`,
            routerLink: `../`,
        },
        {
            caption: `Профиль`,
            routerLink: `./`,
            // routerLinkActiveOptions: { exact: true },
        },
    ];

    constructor(private readonly profileService: ProfileService) {
        this.profile$ = this.profileService.profile$;
    }

    ngOnInit(): void {
        this.profileService.loadProfile();
    }
}
