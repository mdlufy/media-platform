import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthDataService } from '../auth-data.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    public registrationForm = new FormGroup({
        fullname: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private readonly authDataService: AuthDataService) {}

    public onSubmit() {
        const fullname = this.registrationForm.value.fullname;
        const email = this.registrationForm.value.email;
        const password = this.registrationForm.value.password;

        if (fullname && email && password) {
            this.authDataService.createUser({ fullname, email, password });
        }
    }
}
