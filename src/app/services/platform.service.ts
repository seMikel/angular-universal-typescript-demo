import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import { Platform } from '../enums/platform.enum';

@Injectable()
export class PlatformService {

    constructor(@Inject(PLATFORM_ID) private platformId: any) { }

    public get isBrowser(): boolean {
        return isPlatformBrowser(this.platformId);
    }

    public get isServer(): boolean {
        return isPlatformServer(this.platformId);
    }

    public get isMobile(): boolean {
        return isAndroid || isIOS;
    }

    public get is(): Platform {
        if (this.isBrowser) {
            return Platform.Browser;
        }
        if (this.isServer) {
            return Platform.Server;
        }
        if (isAndroid) {
            return Platform.Android;
        }
        if (isIOS) {
            return Platform.IOS;
        }
    }
}
