import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
    title = 'frontend';
    auth = false;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.auth = this.authService.isAuth;
    }

    ngDoCheck(): void {
        this.auth = this.authService.isAuth;
    }

    public logout() {
        this.auth = false;

        this.authService.logout();
    }
}
