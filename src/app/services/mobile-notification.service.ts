import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { SnackBar, SnackBarOptions } from 'nativescript-snackbar';

@Injectable()
export class MobileNotificationService extends NotificationService {
    private snackbar: SnackBar;

    constructor() {
        super();
        this.snackbar = new SnackBar();
    }

    public notify(notificationText: string, buttonText: string, duration: number) {
        const options: SnackBarOptions = {
            actionText: buttonText,
            actionTextColor: '#ffd740', // Optional, Android only
            snackText: notificationText,
            textColor: '#ffffff', // Optional, Android only
            hideDelay: duration,
            backgroundColor: '#323232', // Optional, Android only
        };
        this.snackbar.action(options);
    }
}
