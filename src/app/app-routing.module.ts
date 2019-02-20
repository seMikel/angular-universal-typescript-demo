import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main/main-page.component';
import { AboutPageComponent } from './about/about-page.component';
import { ContactsPageComponent } from './contacts/contacts-page.component';

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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
