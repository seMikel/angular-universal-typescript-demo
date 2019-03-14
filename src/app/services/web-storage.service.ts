import { Injectable } from '@angular/core';
import { PlatformService } from './platform.service';
import { StorageService } from './storage.service';

@Injectable()
export class WebStorageService extends StorageService {

    constructor(private platform: PlatformService) {
        super();
    }

    public setString(key: string, value: string) {
        if (this.platform.isServer) { return; }

        localStorage.setItem(key, value);
    }

    public getString(key: string): string {
        if (this.platform.isServer) { return; }

        return localStorage.getItem(key);
    }
}
