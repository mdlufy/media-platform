import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { AuthStoreService } from './../../../auth-store.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    public registrationForm = new FormGroup({
        fullname: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private readonly authStore: AuthStoreService) {}

    public onSubmit() {
        const form: User = {
            fullname: this.registrationForm.value.fullname ?? '',
            email: this.registrationForm.value.email ?? '',
            password: this.registrationForm.value.password ?? '',
        };

        this.authStore.signup(form);
    }
}
