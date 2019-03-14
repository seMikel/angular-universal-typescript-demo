import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { getString, setString } from 'tns-core-modules/application-settings';

@Injectable()
export class MobileStorageService extends StorageService {

    constructor() {
        super();
    }

    public setString(key: string, value: string) {
        setString(key, value);
    }

    public getString(key: string): string {
        return getString(key);
    }
}
