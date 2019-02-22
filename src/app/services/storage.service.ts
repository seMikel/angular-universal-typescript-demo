import { Injectable } from '@angular/core';
import { PlatformService } from './platform.service';

@Injectable()
export class StorageService {

    constructor(private platform: PlatformService) { }

    public setString(key: string, value: string) {
        if (this.platform.isServer) { return; }

        localStorage.setItem(key, value);
    }

    public getString(key: string): string {
        if (this.platform.isServer) { return; }

        return localStorage.getItem(key);
    }
}
