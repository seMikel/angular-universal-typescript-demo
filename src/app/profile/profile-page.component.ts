import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { skipWhile } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

    user: User;
    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
    });

    constructor(private userService: UserService, private notifications: NotificationService) {
        userService.user.pipe(
            skipWhile(user => !user)
        ).subscribe(user => {
            this.user = user;
            this.userForm.setValue({name: user.name, email: user.email});
        });
    }

    public updateUser() {
        this.userService.setUserData(this.userForm.value).subscribe(user => this.notifications.notify(
            `User data has been updated`,
            'OK',
            2000
        ));
    }

    public makePurchase() {
        this.userService.setUserPurchases([]).subscribe(user => this.notifications.notify(
            `Thank you for your purchase`,
            'OK',
            2000
        ));
    }
}
