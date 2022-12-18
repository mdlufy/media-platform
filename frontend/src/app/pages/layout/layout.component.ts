import { Router } from '@angular/router';
import { AuthStoreService } from './../../auth-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    constructor(
        private authStoreService: AuthStoreService,
        private router: Router
    ) {}

    ngOnInit() {}

    public logout() {
        this.authStoreService.logout();

        this.router.navigate(['auth']);
    }
}
