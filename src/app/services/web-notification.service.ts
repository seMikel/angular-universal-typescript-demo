import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class WebNotificationService extends NotificationService {

    constructor(private snackBar: MatSnackBar) {
        super();
    }

    public notify(notificationText: string, buttonText: string, duration: number) {
        this.snackBar.open(notificationText, buttonText, { duration });
    }
}
