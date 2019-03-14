import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { MainPageComponent } from './main/main-page.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { AboutPageComponent } from './about/about-page.component';
import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { MobileStorageService } from './services/mobile-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './login/login.component';
import { PlatformService } from './services/platform.service';
import { NotificationService } from './services/notification.service';
import { MobileNotificationService } from './services/mobile-notification.service';
import { ContactsPageComponent } from './contacts/contacts-page.component';
import { ProductsPageComponent } from './products/products-page.component';
import { StateService } from './services/state.service';
import { ProfilePageComponent } from './profile/profile-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        ActionBarComponent,
        AboutPageComponent,
        LoginPageComponent,
        ContactsPageComponent,
        ProductsPageComponent,
        ProfilePageComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule
    ],
    providers: [
        StateService,
        PlatformService,
        ProductsService,
        AuthService,
        UserService,
        AuthGuard,
        {
            provide: StorageService,
            useClass: MobileStorageService,
        },
        {
            provide: NotificationService,
            useClass: MobileNotificationService,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
