import { Injectable, Optional } from '@angular/core';
import { PlatformService } from './platform.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Platform } from '../enums/platform.enum';
import { tap } from 'rxjs/operators';

@Injectable()
export class StateService {

    constructor(private platform: PlatformService, @Optional() private state: TransferState) { }

    public get<T>(key: string, backup: Observable<T>): Observable<T> {
        const stateKey = this.platform.isMobile ? null : makeStateKey<T>(key);
        switch (this.platform.is) {
            case Platform.IOS:
            case Platform.Android:
                return backup;
            case Platform.Browser:
                if (this.state.hasKey(stateKey)) {
                    return of(this.state.get(stateKey, undefined));
                } else {
                    return backup;
                }
            case Platform.Server:
                return backup.pipe(tap(data => this.state.set(stateKey, data)));
        }
    }
}
