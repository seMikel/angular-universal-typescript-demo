import { Component, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        @Optional() @Inject(APP_BASE_HREF) origin: string
    ) {
        console.log('App launched with origin: ' + origin);
    }
}
