import { AuthService } from '../../../api/auth/auth.service';
import { User } from '../../../interfaces/user.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private authService: AuthService, private router: Router) {}

    public onSubmit() {
        this.submitted = true;

        const form = {
            fullname: this.user.fullname,
            email: this.user.email,
            password: this.user.password,
        };

        this.authService.signup$(form).subscribe((data) => {
            console.log(data);
            this.router.navigate(['auth']);
        });
    }
}
