import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
