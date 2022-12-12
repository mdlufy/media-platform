import { Router } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthStoreService } from './auth-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
    auth = false;

    constructor(
        private authStoreService: AuthStoreService,
        private router: Router
    ) {}

    ngOnInit() {
        this.auth = this.authStoreService.isAuth;
    }

    ngDoCheck(): void {
        this.auth = this.authStoreService.isAuth;
    }

    public logout() {
        this.auth = false;

        this.authStoreService.logout();

        this.router.navigate(['auth']);
    }
}
