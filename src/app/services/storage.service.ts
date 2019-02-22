import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class StorageService {

    constructor(@Inject(PLATFORM_ID) private platformId: any) { }

    public setString(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    public getString(key: string): string {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem(key);
        }
    }
}
