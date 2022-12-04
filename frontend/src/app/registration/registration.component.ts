import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from './../interfaces/user.interface';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    public user: User = {
        fullname: '',
        email: '',
        password: '',
    };

    public submitted = false;

    constructor(private authService: AuthService) {}

    public onSubmit() {
        this.submitted = true;

        const form = {
            fullname: this.user.fullname,
            email: this.user.email,
            password: this.user.password,
        };

        const auth$ = this.authService.signup$(form);

        auth$.subscribe(
            (data) => console.log(data)
        );
    }
}
