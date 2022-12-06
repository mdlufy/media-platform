import { User } from './../../interfaces/user.interface';
import { Component } from '@angular/core';
import { UserService } from 'src/app/api/users/user.service';

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

    constructor(private userService: UserService) {}

    public onSubmit() {
        this.submitted = true;

        const form = {
            fullname: this.user.fullname,
            email: this.user.email,
            password: this.user.password,
        };

        const auth$ = this.userService.signup$(form);

        auth$.subscribe((data) => console.log(data));
    }
}
