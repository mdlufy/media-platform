import { AuthService } from './../auth.service';
import { User } from './../interfaces/user.interface';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public user: User = {
        fullname: '',
        email: '',
        password: '',
    };

    public submitted = false;

    constructor(private authService: AuthService) {}

    public onSubmit() {
        // this.submitted = true;

        const form = {
            fullname: this.user.fullname,
            email: this.user.email,
            password: this.user.password
        };

        const auth$ = this.authService.signup$(form);

        auth$.subscribe();
    }

    public clearForm() {
        this.user = {
            fullname: '',
            email: '',
            password: '',
        };
    }
}
