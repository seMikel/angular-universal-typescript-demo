import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {

    @Input()
    title = 'Main';
    user: User;

    constructor(
        userService: UserService
    ) {
        userService.user.subscribe(user => this.user = user);
    }

}
