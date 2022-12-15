import { Router } from '@angular/router';
import { AuthService } from '../../../api/auth/auth.service';
import { Component } from '@angular/core';
import { ProfileStoreService } from 'src/app/profile-store.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public email: string = '';
    public password: string = '';

    public submitted = false;

    constructor(
        private authService: AuthService,
        private profileStore: ProfileStoreService,
        private router: Router,
    ) {}

    public login() {
        const form = {
            email: this.email,
            password: this.password,
        };

        this.authService.signin$(form).subscribe((data) => {
            console.log(data);

            if (data.token) {
                localStorage.setItem('token', data.token);

                this.profileStore.profileData.setState({
                    fullname: '',
                    email: form.email,
                });

                this.router.navigate(['videos']);
            }

        });
    }
}
