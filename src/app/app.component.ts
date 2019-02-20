import { Component, OnInit, Inject, Optional } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular-universal-template';

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private http: HttpClient,
        @Optional() @Inject(APP_BASE_HREF) private origin: string
    ) {
        isPlatformServer(this.platformId) ? console.log('constructed on the server') : console.log('constructed not on the server');
    }

    ngOnInit(): void {
        console.log(`Origin: ${this.origin}`);
        isPlatformBrowser(this.platformId) ? console.log('initialized in the browser') : console.log('initialized not in the browser');
        isPlatformBrowser(this.platformId) ? window.localStorage.setItem('testInit', 'value') : console.log();
    }
}
