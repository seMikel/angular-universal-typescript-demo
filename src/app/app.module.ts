import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main/main-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutPageComponent } from './about/about-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsPageComponent } from './contacts/contacts-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsPageComponent } from './products/products-page.component';
import { ProductsService } from './services/products.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { StorageService } from './services/storage.service';
import { LoginDialogComponent } from './main/login-dialog/login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { ProfilePageComponent } from './profile/profile-page.component';
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        AboutPageComponent,
        ContactsPageComponent,
        ProductsPageComponent,
        LoginDialogComponent,
        ProfilePageComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatListModule
    ],
    providers: [
        ProductsService,
        StorageService,
        AuthService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [LoginDialogComponent]
})
export class AppModule { }
