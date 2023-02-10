import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    @Output() logout = new EventEmitter();

    constructor(private readonly router: Router) {}

    public navigateToMain(): void {
        this.router.navigate(['pages']);
    }
}
