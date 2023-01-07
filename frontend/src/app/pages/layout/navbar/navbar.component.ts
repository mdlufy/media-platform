import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @Output() onLogout = new EventEmitter();

    constructor(private readonly router: Router) {}

    ngOnInit(): void {}

    public navigateToMain(): void {
        this.router.navigate(['pages']);
    }
}
