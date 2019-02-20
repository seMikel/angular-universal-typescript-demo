import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

    constructor(private snackBar: MatSnackBar) { }

    onSubmit() {
        this.snackBar.open(
            `Thank you for your input, ${this.contactForm.value.from}! Your message about "${this.contactForm.value.title}" has been sent.`,
            'OK',
            { duration: 5000, }
        );
    }
}
