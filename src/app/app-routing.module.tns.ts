import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page.component';
import { AboutPageComponent } from './about/about-page.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './login/login.component';
import { ContactsPageComponent } from './contacts/contacts-page.component';
import { ProductsPageComponent } from './products/products-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: 'about',
                component: AboutPageComponent
            },
            {
                path: 'contacts',
                component: ContactsPageComponent
            },
            {
                path: 'products',
                component: ProductsPageComponent
            },
            {
                path: 'profile',
                component: ProfilePageComponent
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
