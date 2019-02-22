import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

    loginForm = new FormGroup({
        name: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(private dialogRef: MatDialogRef<LoginDialogComponent>, private auth: AuthService) { }

    onSubmit() {
        this.auth.login(this.loginForm.value).subscribe(user => this.dialogRef.close());
    }

}
