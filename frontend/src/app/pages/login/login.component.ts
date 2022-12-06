import { UserService } from '../../api/users/user.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public email: string = '';
    public password: string = '';

    public submitted = false;

    constructor(private userService: UserService) {}

    public login() {
        const form = {
            email: this.email,
            password: this.password,
        };

        const auth$ = this.userService.signin$(form);

        auth$.subscribe((data) => localStorage.setItem('token', data.token));
    }

    // public clearForm() {
    //     this.user = {
    //         fullname: '',
    //         email: '',
    //         password: '',
    //     };
    // }
}
