import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    user: User;

    constructor(auth: AuthService, userService: UserService, private dialog: MatDialog) {
        userService.user.subscribe(user => this.user = user);
        if (auth.getToken()) {
            userService.getUserData().subscribe();
        }
    }

    public openLoginDialog() {
        this.dialog.open(LoginDialogComponent, {width: '300px'});
    }
}
