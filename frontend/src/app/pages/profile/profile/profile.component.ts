import { LoadingState } from 'src/app/loading-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/+state/profile/profile.reducer';
import { ProfileDataService } from './../profile-data.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    public profile$: Observable<Profile>;

    public loadingState$: Observable<LoadingState>;

    public loadingState = LoadingState;

    public readonly defaultValue = '—';

    public readonly breadcrumbItems = [
        {
            caption: `Главная`,
            routerLink: `../`,
        },
        {
            caption: `Профиль`,
            routerLink: `./`,
        },
    ];

    constructor(private readonly profileDataService: ProfileDataService) {
        this.profile$ = this.profileDataService.profile$;
        this.loadingState$ = this.profileDataService.loadingState$;
    }

    ngOnInit(): void {
        this.profileDataService.loadProfile();
    }
}
