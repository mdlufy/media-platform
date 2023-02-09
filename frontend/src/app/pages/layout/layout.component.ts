import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingState } from 'src/app/loading-state';
import { AuthDataService } from '../auth/auth-data.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    public loadingState$: Observable<LoadingState>;

    public loadingState = LoadingState;

    constructor(private authDataService: AuthDataService) {
        this.loadingState$ = this.authDataService.loadingState$;
    }

    public logout() {
        this.authDataService.logout();
    }
}
