import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
    contactForm = new FormGroup({
        from: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)
    });

    constructor(private notifications: NotificationService) { }

    onSubmit() {
        this.notifications.notify(
            `Thank you for your input, ${this.contactForm.value.from}! Your message about "${this.contactForm.value.title}" has been sent.`,
            'OK',
            5000
        );
    }
}
